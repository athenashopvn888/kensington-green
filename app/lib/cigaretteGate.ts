import type { CigaretteSurfaceDecision } from "./cigDecision";
import { SHOW_CIGARETTES } from "./showCigarettes";

export type CigaretteWebGate = "show" | "redirect" | "unavailable";

/**
 * Coded behaviour stays the existing switch: hidden cigarette URLs redirect.
 * An explicit feed off (webOn false, or no real cigarette items) stays on the
 * same URL with the unavailable block. Feed errors fail open to the switch.
 */
export function cigaretteWebGate(decision: Pick<CigaretteSurfaceDecision, "show" | "reason">): CigaretteWebGate {
  if (decision.reason === "off" || decision.reason === "no-items") return "unavailable";
  if (decision.show) return "show";
  return SHOW_CIGARETTES ? "show" : "redirect";
}
