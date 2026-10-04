"""Regenerate placeholder app icons from the brand colors.

Usage: pip install pillow && python3 scripts/generate_icons.py [LETTER]

Replace with real artwork when you have a logo: drop a 1024x1024 PNG at
ios/Kanikonriio/Images.xcassets/AppIcon.appiconset/1024.png and resize it
into android/app/src/main/res/mipmap-*/ic_launcher*.png.
"""
import glob
import sys

from PIL import Image, ImageDraw, ImageFont

BACKGROUND = (0x1C, 0x1C, 0x1C, 255)  # brand.colors.background
PRIMARY = (0x2A, 0x67, 0x73, 255)  # brand.colors.primary
LETTER = sys.argv[1] if len(sys.argv) > 1 else "K"


def load_font(size):
    candidates = ["/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", "Arial Bold.ttf", "arialbd.ttf"]
    candidates += glob.glob("/usr/share/fonts/**/*Bold*.ttf", recursive=True)
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            pass
    return ImageFont.load_default(size)


def make_icon(size, round_icon=False):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0) if round_icon else BACKGROUND)
    draw = ImageDraw.Draw(img)
    if round_icon:
        draw.ellipse([0, 0, size - 1, size - 1], fill=BACKGROUND)
    margin = int(size * 0.16)
    draw.ellipse([margin, margin, size - margin, size - margin], fill=PRIMARY)
    font = load_font(int(size * 0.42))
    box = draw.textbbox((0, 0), LETTER, font=font)
    x = (size - (box[2] - box[0])) / 2 - box[0]
    y = (size - (box[3] - box[1])) / 2 - box[1]
    draw.text((x, y), LETTER, font=font, fill="white")
    return img


make_icon(1024).convert("RGB").save("ios/Kanikonriio/Images.xcassets/AppIcon.appiconset/1024.png")
make_icon(512).save("assets/logo.png")
for path in glob.glob("android/app/src/main/res/mipmap-*/ic_launcher*.png"):
    size = Image.open(path).size[0]
    make_icon(size, "round" in path).save(path)
print("Icons regenerated")
