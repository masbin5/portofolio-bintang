"""
Ganti SEMUA warna kuning/oranye lama di page.tsx jadi hijau emerald.

Cara pakai (jalankan di folder project, yang ada folder app/):
    python recolor_green.py
atau tentukan file-nya:
    python recolor_green.py app/page.tsx

File asli dicadangkan dulu sebagai page.tsx.bak
"""

import re
import shutil
import sys
from pathlib import Path

path = Path(sys.argv[1] if len(sys.argv) > 1 else "app/page.tsx")
if not path.is_file():
    sys.exit(f"File tidak ditemukan: {path}\nJalankan dari folder project, atau tulis path-nya.")

src = path.read_text(encoding="utf-8")
backup = path.with_suffix(path.suffix + ".bak")
shutil.copyfile(path, backup)

# 1) Kilau teks "intuitive" / "together." -> mint terang (supaya kontras di atas hijau)
src, n_shimmer = re.subn(
    r"(\.gold-shimmer\s*\{\s*background:\s*)linear-gradient\([^;]*\);",
    r"\1linear-gradient(90deg, #6ee7b7, #ecfdf5, #34d399, #d1fae5, #6ee7b7);",
    src,
)

# 2) Kode hex
hex_map = {
    "#f59e0b": "#10b981",
    "#fbbf24": "#34d399",
    "#fcd34d": "#a7f3d0",
    "#f26b1d": "#10b981",
    "#ff8f4a": "#34d399",
    "#ffb27a": "#a7f3d0",
    "#d4540f": "#047857",
    "#a83f0b": "#064e3b",
}

# 3) rgba(R,G,B  (spasi bebas)
rgb_map = {
    (245, 158, 11): (16, 185, 129),
    (251, 191, 36): (52, 211, 153),
    (242, 107, 29): (16, 185, 129),
    (255, 143, 74): (52, 211, 153),
    (255, 214, 180): (209, 250, 229),
}

report = [("gold-shimmer", n_shimmer)]

for old, new in hex_map.items():
    src, n = re.subn(re.escape(old), new, src, flags=re.IGNORECASE)
    report.append((old, n))

for (r, g, b), (r2, g2, b2) in rgb_map.items():
    pat = rf"rgba\(\s*{r}\s*,\s*{g}\s*,\s*{b}\s*(?=,)"
    src, n = re.subn(pat, f"rgba({r2},{g2},{b2}", src)
    report.append((f"rgba({r},{g},{b}", n))

path.write_text(src, encoding="utf-8")

print(f"Selesai. Cadangan: {backup}\n")
for name, n in report:
    print(f"  {name:<22} {n} diganti")
print(f"\nTotal: {sum(n for _, n in report)} penggantian.")
print("Refresh browser dengan Ctrl + Shift + R.")
