import glob
import os
import re
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
LAYANAN_DIR = ROOT / 'resources' / 'js' / 'pages' / 'Layanan'
PUBLIC_DIR = ROOT / 'public'
IMAGE_PATTERN = re.compile(r'["\'](/images/[^"\']+)["\']')
IGNORE_PATTERNS = [r'/images/rsudhaji', r'/images/no-image.svg', r'/images/rsudhaji-2', r'/images/no-image']
VALID_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.webp'}

if __name__ == '__main__':
    found_images = set()
    for tsx_path in LAYANAN_DIR.glob('*.tsx'):
        text = tsx_path.read_text(encoding='utf-8')
        for match in IMAGE_PATTERN.findall(text):
            if any(ignore in match.lower() for ignore in IGNORE_PATTERNS):
                continue
            found_images.add(match)

    if not found_images:
        print('No layanan image references found.')
        raise SystemExit(0)

    print('Found layanan image references:')
    for img in sorted(found_images):
        print('  ', img)

    total_before = 0
    total_after = 0
    changed_files = []

    for img_ref in sorted(found_images):
        img_path = PUBLIC_DIR / img_ref.lstrip('/')
        if not img_path.exists():
            print(f'Warning: file not found: {img_path}')
            continue
        suffix = img_path.suffix.lower()
        if suffix not in VALID_EXTENSIONS:
            print(f'Skipping unsupported extension: {img_path}')
            continue

        size_before = img_path.stat().st_size
        total_before += size_before
        try:
            with Image.open(img_path) as image:
                options = {}
                if suffix == '.png':
                    options = {'optimize': True}
                elif suffix in {'.jpg', '.jpeg'}:
                    options = {'optimize': True, 'quality': 100, 'subsampling': 0}
                elif suffix == '.webp':
                    options = {'lossless': True, 'quality': 100}
                image.save(img_path, **options)
        except Exception as exc:
            print(f'Error optimizing {img_path}: {exc}')
            continue

        size_after = img_path.stat().st_size
        total_after += size_after
        changed_files.append((img_path, size_before, size_after))

    if changed_files:
        print('\nOptimization results:')
        for path, before, after in changed_files:
            savings = before - after
            pct = (savings / before * 100) if before else 0
            print(f'  {path.relative_to(ROOT)}: {before} -> {after} bytes ({savings} bytes, {pct:.2f}% saved)')
        print(f'\nTotal before: {total_before} bytes')
        print(f'Total after:  {total_after} bytes')
        print(f'Total saved: {total_before - total_after} bytes')
    else:
        print('No files optimized.')
