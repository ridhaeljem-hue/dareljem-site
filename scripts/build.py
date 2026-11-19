"""Construit le site publié dans _site/ (lancé par GitHub Actions à chaque modification).

- copie le site ;
- rassemble les articles de content/chroniques/*.json (écrits par Pages CMS)
  dans assets/data/chroniques.json, lu par le site ;
- redimensionne les photos envoyées depuis le CMS (assets/img/chroniques/).
"""
import json, re, shutil
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '_site'
SKIP = {'.git', '.github', '_site', 'scripts', 'node_modules', '.pages.yml', 'README.md'}
CATS = {'cuisine', 'mosaique', 'histoire', 'vie'}
EXPS = {'musee', 'atelier', 'restaurant', 'cooking', 'cafe'}


def words(html):
    return len(unescape(re.sub(r'<[^>]+>', ' ', html or '')).split())


def build_index(src_dir):
    posts = []
    for f in sorted(src_dir.glob('*.json')):
        try:
            d = json.loads(f.read_text(encoding='utf-8'))
        except ValueError as e:
            print(f'! article ignoré, JSON invalide : {f.name} ({e})')
            continue
        if d.get('publie') is False or not d.get('titre_fr') or not d.get('date'):
            continue
        fr_body = d.get('contenu_fr') or ''
        en_body = d.get('contenu_en') or fr_body
        posts.append({
            'id': f.stem,
            'cat': d.get('categorie') if d.get('categorie') in CATS else 'vie',
            'img': (d.get('image') or '').lstrip('/'),
            'date': str(d['date'])[:10],
            'min': max(1, round(words(fr_body) / 200)),
            'fig': [g.lstrip('/') for g in (d.get('galerie') or []) if g],
            'cta': d.get('experience') if d.get('experience') in EXPS else None,
            'fr': {'t': d['titre_fr'], 'x': d.get('resume_fr') or '', 'body': fr_body},
            'en': {'t': d.get('titre_en') or d['titre_fr'], 'x': d.get('resume_en') or d.get('resume_fr') or '', 'body': en_body},
        })
    posts.sort(key=lambda p: p['date'], reverse=True)
    return posts


def shrink_images(folder, max_side=1600, max_bytes=450_000):
    try:
        from PIL import Image, ImageOps
    except ImportError:
        print('Pillow absent : photos non redimensionnées')
        return
    for f in folder.glob('*'):
        if f.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp'}:
            continue
        if f.stat().st_size <= max_bytes:
            continue
        im = ImageOps.exif_transpose(Image.open(f))
        im.thumbnail((max_side, max_side), Image.LANCZOS)
        if f.suffix.lower() in {'.jpg', '.jpeg'}:
            im.convert('RGB').save(f, quality=80, optimize=True, progressive=True)
        elif f.suffix.lower() == '.webp':
            im.save(f, 'WEBP', quality=80)
        else:
            im.save(f, optimize=True)
        print(f'photo allégée : {f.name} → {f.stat().st_size // 1024} Ko')


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    shutil.copytree(ROOT, OUT, ignore=lambda d, names: [n for n in names if Path(d) == ROOT and n in SKIP])
    posts = build_index(ROOT / 'content' / 'chroniques')
    data = json.dumps(posts, ensure_ascii=False)
    for base in (OUT, ROOT):  # copie aussi dans le dépôt, pour un aperçu sans GitHub Actions
        (base / 'assets' / 'data').mkdir(parents=True, exist_ok=True)
        (base / 'assets' / 'data' / 'chroniques.json').write_text(data, encoding='utf-8')
    shutil.rmtree(OUT / 'content', ignore_errors=True)
    shrink_images(OUT / 'assets' / 'img' / 'chroniques')
    print(f'{len(posts)} article(s) publié(s)')


if __name__ == '__main__':
    main()
