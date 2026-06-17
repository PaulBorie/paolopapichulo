# Paolopapichulo

Site vitrine — agence de croissance sur les réseaux sociaux.
Site statique (HTML + CSS Tailwind **compilé**). Déployé via Cloudflare Pages (auto-deploy à chaque `git push`).

## Fichiers
- `index.html` — la page
- `styles.css` — CSS Tailwind compilé et minifié (⚠️ généré, ne pas éditer à la main)
- `favicon.svg` — logo / favicon
- `og-image.png` — image de partage social (1200×630)
- `robots.txt`, `sitemap.xml` — SEO
- `tailwind.config.js`, `_input.css` — sources pour recompiler le CSS

## ⚠️ Important : recompiler le CSS après modif du HTML
Le CSS est compilé statiquement (plus rapide / meilleur SEO que le CDN).
Si tu ajoutes/changes des classes Tailwind dans `index.html`, régénère `styles.css` :

```bash
npx tailwindcss@3.4.17 -i _input.css -o styles.css --minify
```

Puis commit + push (Cloudflare redéploie tout seul) :

```bash
git add . && git commit -m "update" && git push origin main
```
