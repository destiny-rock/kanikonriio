"""Regenerate app icons from the brand mark.

Usage: pip install pillow && python3 scripts/generate_icons.py

Draws assets/brand/mark.png (the Kanikonriio sparkle, transparent PNG)
centered on the brand purple, and writes the iOS, Android, and README icons.
Swap assets/brand/mark.png or BACKGROUND to change the icon.
"""
import glob

from PIL import Image, ImageDraw

BACKGROUND = (0x80, 0x41, 0xFF, 255)  # palette.purple in theme/brand.ts
MARK = Image.open("assets/brand/mark.png").convert("RGBA")
MARK_SCALE = 0.5  # mark width/height as a fraction of the icon


def make_icon(size, round_icon=False):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0) if round_icon else BACKGROUND)
    if round_icon:
        ImageDraw.Draw(img).ellipse([0, 0, size - 1, size - 1], fill=BACKGROUND)
    scale = size * MARK_SCALE / max(MARK.size)
    mark = MARK.resize((round(MARK.width * scale), round(MARK.height * scale)), Image.LANCZOS)
    img.alpha_composite(mark, ((size - mark.width) // 2, (size - mark.height) // 2))
    return img


make_icon(1024).convert("RGB").save("ios/Kanikonriio/Images.xcassets/AppIcon.appiconset/1024.png")
make_icon(512).save("assets/logo.png")
for path in glob.glob("android/app/src/main/res/mipmap-*/ic_launcher*.png"):
    size = Image.open(path).size[0]
    make_icon(size, "round" in path).save(path)
print("Icons regenerated")
