"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./delivery.module.css";

export default function DeliveryContent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      await fetch(
        `https://script.google.com/macros/s/AKfycbySrZYxI-NNnXfxY1jXOqHgT2HQi4zst2Fgte6FXTeymat_W_r0o1E3P83EfnVCjEk0/exec?action=delivery_email&email=${encodeURIComponent(email)}&store=KSC01`,
        { method: "GET", mode: "no-cors" },
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success");
    }
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>
          Delivery <span className={styles.highlight}>Coming Soon</span>
        </h1>
        <p className={styles.pageSubtitle}>
          Kensington Green is preparing delivery for Dundas West, Roncesvalles,
          High Park, and nearby west Toronto. Sign up below to be the first to
          know when we go live and get an exclusive launch-day deal.
        </p>

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Get Notified When We Launch</h2>
          <p className={styles.formDesc}>
            Enter your email to join our delivery waitlist. We&apos;ll send you
            one email when delivery goes live.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={styles.emailInput}
                required
                disabled={status === "loading"}
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Notify Me"}
              </button>
            </div>
          </form>
          {status === "success" && (
            <p className={styles.successMsg}>
              You&apos;re on the list! We&apos;ll notify you when delivery
              launches.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}></span>
            <h3 className={styles.infoTitle}>Same-Day Delivery</h3>
            <p className={styles.infoDesc}>
              Launch updates will focus on Dundas West, Roncesvalles, High Park,
              and nearby west Toronto.
            </p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}></span>
            <h3 className={styles.infoTitle}>West Toronto Zones</h3>
            <p className={styles.infoDesc}>
              Built around Dundas West, Roncesvalles, High Park, Junction
              Triangle, and nearby west Toronto.
            </p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}></span>
            <h3 className={styles.infoTitle}>Same Great Prices</h3>
            <p className={styles.infoDesc}>
              All in-store promotions apply to delivery orders too.
            </p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Can&apos;t wait? Visit us in-store at{" "}
            <strong>2257 Dundas St W, Toronto</strong>. We are{" "}
            <strong>Open Daily: 10:00 AM - 02:00 AM</strong>. Call{" "}
            <strong>+1 (289) 514-9520</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
