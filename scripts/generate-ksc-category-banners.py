from __future__ import annotations

import io
import json
import math
import urllib.request
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "banners" / "ksc-real"
CACHE = OUT / "cache"
OUT.mkdir(parents=True, exist_ok=True)
CACHE.mkdir(parents=True, exist_ok=True)

HERO_PATH = ROOT / "public" / "banners" / "welcome_banner.webp"
LOGO_PATH = ROOT / "public" / "storeFavicon.webp"
ITEMS_PATH = ROOT / "app" / "lib" / "items.json"

HERO = Image.open(HERO_PATH).convert("RGB")
LOGO = Image.open(LOGO_PATH).convert("RGBA")
ITEMS = json.loads(ITEMS_PATH.read_text(encoding="utf-8"))

FONT_DIR = Path("C:/Windows/Fonts")
FONT_BLACK = "arialbd.ttf"
FONT_REGULAR = "arial.ttf"
FONT_IMPACT = "impact.ttf"


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size)


def text_size(draw: ImageDraw.ImageDraw, text: str, size: int, font_name: str = FONT_BLACK) -> tuple[int, int]:
    bbox = draw.textbbox((0, 0), text, font=font(font_name, size))
    return bbox[2] - bbox[0], bbox[3] - bbox[1]


def fit_font(draw: ImageDraw.ImageDraw, text: str, max_width: int, start: int, font_name: str = FONT_IMPACT) -> int:
    size = start
    while size > 32 and text_size(draw, text, size, font_name)[0] > max_width:
        size -= 2
    return size


def draw_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    size: int,
    fill: str | tuple[int, int, int, int],
    font_name: str = FONT_BLACK,
    stroke: int = 0,
    stroke_fill: str | tuple[int, int, int, int] = "#000000",
) -> None:
    draw.text(xy, text, font=font(font_name, size), fill=fill, stroke_width=stroke, stroke_fill=stroke_fill)


def rounded(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], radius: int, fill, outline=None, width: int = 1) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def bg(size: tuple[int, int], accent: tuple[int, int, int]) -> Image.Image:
    base = ImageOps.fit(HERO, size, method=Image.Resampling.LANCZOS, centering=(0.52, 0.5)).convert("RGBA")
    base = base.filter(ImageFilter.GaussianBlur(4))
    base = ImageEnhance.Contrast(base).enhance(1.2)
    base = ImageEnhance.Color(base).enhance(1.16)
    base.alpha_composite(Image.new("RGBA", size, (4, 7, 18, 166)))

    w, h = size
    radial = Image.new("RGBA", size, (0, 0, 0, 0))
    pix = radial.load()
    for y in range(h):
        for x in range(w):
            nx = (x - w * 0.72) / (w * 0.54)
            ny = (y - h * 0.38) / (h * 0.68)
            a = max(0, 1 - math.sqrt(nx * nx + ny * ny))
            if a:
                pix[x, y] = (*accent, int(a * 120))
    base.alpha_composite(radial)

    line = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(line)
    for offset, alpha in [(28, 180), (38, 80), (50, 40)]:
        d.rounded_rectangle((offset, offset, w - offset, h - offset), radius=38, outline=(*accent, alpha), width=3)
    base.alpha_composite(line.filter(ImageFilter.GaussianBlur(3)))
    base.alpha_composite(line)
    return base


def cache_name(url: str) -> Path:
    safe = "".join(ch if ch.isalnum() else "-" for ch in url.split("/")[-1])[:90]
    return CACHE / safe


def load_remote(url: str) -> Image.Image | None:
    if not url:
        return None
    cached = cache_name(url)
    try:
        if cached.exists():
            raw = cached.read_bytes()
        else:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=25) as response:
                raw = response.read()
            cached.write_bytes(raw)
        return Image.open(io.BytesIO(raw)).convert("RGBA")
    except Exception as exc:
        print(f"[asset] Could not load {url}: {exc}")
        return None


def remove_plain_background(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            brightness = (r + g + b) / 3
            spread = max(r, g, b) - min(r, g, b)
            if brightness > 244 and spread < 22:
                px[x, y] = (r, g, b, 0)
            elif brightness > 226 and spread < 34:
                fade = int(max(0, min(255, (244 - brightness) / 18 * 255)))
                px[x, y] = (r, g, b, min(a, fade))
    alpha = img.getchannel("A").filter(ImageFilter.GaussianBlur(0.55))
    img.putalpha(alpha)
    bbox = alpha.getbbox()
    if bbox:
        img = img.crop(bbox)
    return img


def records_for(category: str, limit: int = 4) -> list[dict]:
    category = category.upper()
    if category == "ACCESSORIES":
        matches = [
            item
            for item in ITEMS
            if str(item.get("category", "")).upper() == "ADD ONS"
            and any(word in str(item.get("name", "")).upper() for word in ["RAW", "PAPER", "LIGHTER", "TRAY", "GRINDER"])
        ]
    elif category == "PREROLLS":
        matches = [item for item in ITEMS if str(item.get("category", "")).upper() == "PREROLLS"]
    elif category == "MAGIC":
        matches = [item for item in ITEMS if str(item.get("category", "")).upper() == "MAGIC & OTHERS"]
    else:
        matches = [item for item in ITEMS if str(item.get("category", "")).upper() == category]
    return matches[:limit]


def product_images(records: Iterable[dict], limit: int = 3) -> list[Image.Image]:
    images: list[Image.Image] = []
    for record in records:
        img = load_remote(str(record.get("image", "")))
        if img is None:
            continue
        cut = remove_plain_background(img)
        cut = ImageEnhance.Sharpness(cut).enhance(1.12)
        cut = ImageEnhance.Contrast(cut).enhance(1.08)
        images.append(cut)
        if len(images) >= limit:
            break
    return images


def paste_contained(canvas: Image.Image, img: Image.Image, box: tuple[int, int, int, int], opacity: int = 255) -> None:
    x1, y1, x2, y2 = box
    bw, bh = x2 - x1, y2 - y1
    scale = min(bw / img.width, bh / img.height)
    nw = max(1, int(img.width * scale))
    nh = max(1, int(img.height * scale))
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    if opacity < 255:
        alpha = resized.getchannel("A").point(lambda p: int(p * opacity / 255))
        resized.putalpha(alpha)
    px = x1 + (bw - nw) // 2
    py = y1 + (bh - nh) // 2

    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    mask = resized.getchannel("A").filter(ImageFilter.GaussianBlur(18))
    sh = Image.new("RGBA", resized.size, (0, 0, 0, 175))
    sh.putalpha(mask)
    shadow.alpha_composite(sh, (px + 20, py + 26))
    canvas.alpha_composite(shadow)
    canvas.alpha_composite(resized, (px, py))


def paste_logo(canvas: Image.Image, xy: tuple[int, int], size: int = 92) -> None:
    logo = LOGO.copy()
    logo.thumbnail((size, size), Image.Resampling.LANCZOS)
    glow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    glow.alpha_composite(logo, xy)
    glow = glow.filter(ImageFilter.GaussianBlur(12))
    canvas.alpha_composite(glow)
    canvas.alpha_composite(logo, xy)


def draw_gamepad(draw: ImageDraw.ImageDraw, canvas: Image.Image, accent: tuple[int, int, int]) -> None:
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    body = (1020, 250, 1530, 555)
    d.rounded_rectangle(body, radius=130, fill=(14, 18, 34, 235), outline=(*accent, 220), width=7)
    d.ellipse((1110, 342, 1170, 402), fill=(*accent, 230))
    d.rectangle((1135, 305, 1148, 439), fill=(240, 255, 246, 235))
    d.rectangle((1072, 368, 1210, 381), fill=(240, 255, 246, 235))
    for cx, cy, color in [(1370, 333, (151, 255, 80)), (1440, 390, (178, 86, 255)), (1320, 440, (255, 255, 255))]:
        d.ellipse((cx - 28, cy - 28, cx + 28, cy + 28), fill=(*color, 245), outline=(0, 0, 0, 120), width=3)
    canvas.alpha_composite(layer.filter(ImageFilter.GaussianBlur(1)))


def make_banner(file: str, title: str, subtitle: str, chips: list[str], accent: tuple[int, int, int], records: list[dict], game: bool = False) -> None:
    size = (1916, 821)
    canvas = bg(size, accent)
    d = ImageDraw.Draw(canvas)

    panel = Image.new("RGBA", size, (0, 0, 0, 0))
    pd = ImageDraw.Draw(panel)
    pd.rounded_rectangle((76, 98, 890, 702), radius=34, fill=(5, 9, 20, 170), outline=(*accent, 120), width=2)
    pd.rectangle((0, 0, size[0], 18), fill=(*accent, 235))
    canvas.alpha_composite(panel)

    if game:
        draw_gamepad(d, canvas, accent)
        paste_logo(canvas, (1110, 110), 165)
    else:
        images = product_images(records, 3)
        if images:
            paste_contained(canvas, images[0], (900, 95, 1290, 700), opacity=245)
            if len(images) > 1:
                paste_contained(canvas, images[1], (1190, 112, 1570, 698), opacity=232)
            if len(images) > 2:
                paste_contained(canvas, images[2], (1470, 190, 1840, 705), opacity=224)
        else:
            paste_logo(canvas, (1190, 180), 290)

    paste_logo(canvas, (120, 134), 112)
    draw_text(d, (250, 150), "KENSINGTON GREEN", 42, "#ffffff", FONT_BLACK, stroke=2, stroke_fill="#060914")
    draw_text(d, (122, 286), "MENU CATEGORY", 28, accent + (255,), FONT_BLACK, stroke=2, stroke_fill="#050914")
    title_size = fit_font(d, title.upper(), 710, 112)
    draw_text(d, (120, 334), title.upper(), title_size, "#ffffff", FONT_IMPACT, stroke=3, stroke_fill="#050914")
    draw_text(d, (126, 470), subtitle, 34, "#eaf7ef", FONT_BLACK, stroke=2, stroke_fill="#050914")

    x = 126
    y = 594
    for chip in chips[:3]:
        tw, _ = text_size(d, chip, 23, FONT_BLACK)
        bw = min(260, tw + 44)
        rounded(d, (x, y, x + bw, y + 54), 27, (4, 9, 18, 190), outline=accent + (165,), width=2)
        draw_text(d, (x + 22, y + 15), chip, 23, "#ffffff", FONT_BLACK)
        x += bw + 18

    draw_text(d, (1510, 680), "KSC", 78, accent + (235,), FONT_IMPACT, stroke=4, stroke_fill="#050914")
    canvas.convert("RGB").save(OUT / file, "WEBP", quality=93, method=6)


ASSETS = [
    ("category-vape-pens.webp", "Vape Pens", "Nicotine vape devices and flavors", ["Nic vape", "Devices", "Flavors"], (146, 255, 72), records_for("VAPE PENS")),
    ("category-nic-vape.webp", "Nic Vape", "Fast disposable vape browsing", ["Disposable", "Vape", "Quick pick"], (180, 96, 255), records_for("VAPE DISPOSABLE")),
    ("category-concentrates.webp", "Concentrates", "Hash, extracts and stronger formats", ["Hash", "Extracts", "Potent"], (255, 208, 56), records_for("CONCENTRATES")),
    ("category-prerolls.webp", "Pre-Rolls", "Ready-to-smoke singles and packs", ["Singles", "Infused", "Packs"], (82, 255, 150), records_for("PREROLLS")),
    ("category-accessories.webp", "Accessories", "Papers and session essentials", ["Papers", "Tools", "Add-ons"], (76, 214, 255), records_for("ACCESSORIES")),
    ("category-cigarettes.webp", "Cigarettes", "Native smokes and tobacco lane", ["Canadian", "Grabba", "Backwoods"], (230, 221, 205), records_for("CIGARETTES")),
    ("category-magic.webp", "Magic Stuff", "Specialty menu items", ["Chocolate", "Gummies", "Specialty"], (210, 98, 255), records_for("MAGIC")),
    ("category-games.webp", "Games Arcade", "Play while you browse", ["Arcade", "Break", "Fun"], (142, 255, 60), [], True),
]


def make_contact_sheet() -> None:
    thumbs = []
    for file, *_ in ASSETS:
        img = Image.open(OUT / file).convert("RGB")
        img.thumbnail((460, 197), Image.Resampling.LANCZOS)
        thumbs.append((file, img.copy()))
    sheet = Image.new("RGB", (1000, 940), (5, 8, 18))
    d = ImageDraw.Draw(sheet)
    for idx, (file, img) in enumerate(thumbs):
        col = idx % 2
        row = idx // 2
        x = 26 + col * 487
        y = 28 + row * 224
        sheet.paste(img, (x, y))
        d.text((x, y + 202), file, fill=(232, 240, 238), font=font(FONT_REGULAR, 20))
    sheet.save(OUT / "preview-grid.webp", "WEBP", quality=90, method=6)


def main() -> None:
    for asset in ASSETS:
        make_banner(*asset)
    make_contact_sheet()
    print(f"Generated KSC category banners in {OUT}")


if __name__ == "__main__":
    main()
