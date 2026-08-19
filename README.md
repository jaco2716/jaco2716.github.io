# jaco2716.github.io — Jacob F. Welin's portfolio

Personal CV/portfolio site for Jacob F. Welin, Senior App Developer.
Danish content. Built by hand: **plain HTML + CSS + vanilla JS** — no
frameworks, no build step. GSAP (loaded from CDN) powers the scroll and
entrance animations; everything degrades gracefully without it and respects
`prefers-reduced-motion`.

## Run locally

Open `index.html` in a browser. That's it — no server or install required.

## Structure

```
index.html            single page, anchor navigation
css/style.css         design tokens + all styling (dark petrol theme)
js/main.js            canvas particle background, GSAP animations, lightbox, nav
assets/img/           optimized images (each < 300 KB)
gemini-prompts.md     prompts for AI images still to be generated (hero image,
                      Camino Nomad card, OG image) — placeholders in the page
                      mark where they go
```

## Deploy

Push to `main` on the GitHub repo `jaco2716/jaco2716.github.io`. GitHub Pages
serves the site automatically at https://jaco2716.github.io/ — no Actions
workflow needed.

## Image pipeline

Source images live outside the repo (`../Images/`, 134 MB — never committed).
Selected images are downscaled and compressed with `sips`, e.g.:

```sh
sips --resampleWidth 1280 -s format jpeg -s formatOptions 80 <in> --out assets/img/<out>.jpg
```

Target: < 300 KB per image, whole repo well under 15 MB.
