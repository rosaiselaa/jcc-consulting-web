import fitz
from pathlib import Path

files = [
    Path('attached_assets/JCC_Consulting_Presentacion._1787243688362.pdf'),
    Path('attached_assets/Brochure_JCC_Consulting_Transformacion_Digital-1_1787243688362.pdf'),
]
out = Path('.agents/outputs/jcc-brochures')
out.mkdir(parents=True, exist_ok=True)
for pdf_path in files:
    doc = fitz.open(pdf_path)
    stem = pdf_path.stem.replace(' ', '_')
    print(f'{pdf_path.name}: {len(doc)} pages')
    for index, page in enumerate(doc):
        pix = page.get_pixmap(matrix=fitz.Matrix(1.2, 1.2), alpha=False)
        target = out / f'{stem}-page-{index+1:02d}.png'
        pix.save(target)
    text = '\n\n'.join(page.get_text() for page in doc)
    (out / f'{stem}.txt').write_text(text, encoding='utf-8')
