"""
Ubah semua halaman PDF menjadi gambar JPG: page-01.jpg, page-02.jpg, dst.

Cara pakai:
  1. pip install pymupdf
  2. Ubah PDF_PATH dan OUTPUT_DIR di bawah (cukup sekali)
  3. python pdf_to_pages.py

Atau tanpa edit file:
  python pdf_to_pages.py "C:\\path\\Bintang - Graphic Designer.pdf" "C:\\path\\portfolio-bintang\\public\\graphic\\pages"
"""

import sys
from pathlib import Path

import pymupdf  # PyMuPDF

# ====== ATUR DI SINI ======
PDF_PATH = r"C:\Users\masbi\Documents\Bintang - Graphic Designer.pdf"
OUTPUT_DIR = r"C:\Users\masbi\portfolio-bintang\public\graphic\pages"
WIDTH_PX = 1688   # lebar tiap gambar (px)
QUALITY = 85      # kualitas JPG 1-100
# ==========================


def main() -> None:
    pdf_path = Path(sys.argv[1] if len(sys.argv) > 1 else PDF_PATH)
    out_dir = Path(sys.argv[2] if len(sys.argv) > 2 else OUTPUT_DIR)

    if not pdf_path.is_file():
        sys.exit(f"File PDF tidak ditemukan: {pdf_path}")

    out_dir.mkdir(parents=True, exist_ok=True)

    # Hapus hasil lama supaya tidak ada sisa halaman dari PDF sebelumnya
    for old in out_dir.glob("page-*.jpg"):
        old.unlink()

    with pymupdf.open(pdf_path) as doc:
        total = len(doc)
        for i, page in enumerate(doc, start=1):
            zoom = WIDTH_PX / page.rect.width
            pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
            out_file = out_dir / f"page-{i:02d}.jpg"
            pix.save(out_file, jpg_quality=QUALITY)
            size_kb = out_file.stat().st_size / 1024
            print(f"[{i}/{total}] {out_file.name}  ({size_kb:.0f} KB)")

    print(f"\nSelesai: {total} halaman disimpan di {out_dir}")
    print(f"Di page.tsx pastikan: Array.from({{ length: {total} }}, ...)")


if __name__ == "__main__":
    main()
