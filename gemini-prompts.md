# Billed-prompts til Gemini

Prompts til de billeder, der mangler eller kan forbedres. Kopiér prompten ind i
Gemini (Nano Banana / Imagen). Prompts er på engelsk — det giver de bedste
resultater. Under hver prompt står, hvor filen skal lande, og hvad den erstatter.

---

## 1. Hero-billede (VIGTIGST — erstatter pladsholderen i hero-sektionen)

**Upload dit profilbillede (`../1689702552931.jpeg`) sammen med prompten.**

> Professional portrait photo edit of the man in the uploaded photo. Keep his
> face, glasses, hair and likeness EXACTLY as in the original — do not change
> his facial features. Re-light and re-stage the scene: he stands relaxed,
> upper body, arms lightly crossed, wearing a dark navy blazer over an open
> light shirt. Background: deep dark petrol/teal studio backdrop (#0D2B32)
> with a soft teal rim light from the left (#4FA3B2) and a very subtle warm
> copper glow from the right (#C98A54). Moody, high-end tech-portfolio look,
> shallow depth of field, crisp focus on the face. Vertical 4:5 crop,
> photorealistic, high resolution.

- **Gem som:** `assets/img/hero-jacob.jpg` (maks 1600 px høj, komprimér til < 300 KB
  — fx `sips --resampleHeight 1600 -s format jpeg -s formatOptions 80 <in> --out assets/img/hero-jacob.jpg`)
- **Erstatter:** `.portrait-placeholder`-boksen i `index.html` (hero-sektionen).
  Byt `<div class="portrait-placeholder">…</div>` ud med
  `<img src="assets/img/hero-jacob.jpg" alt="Jacob F. Welin" class="hero__img">`
  — bed Claude om at gøre det, når billedet ligger klar.

---

## 2. Camino Nomad — portefølje-kort (erstatter pladsholder-kortet)

**Upload app-ikonet (`../Images/Apps/camino-nomad/icon.png`) sammen med prompten.**
Har du screenshots fra appen, så upload også 1-3 af dem og bed Gemini sætte dem
ind i telefonerne i stedet for at opfinde UI.

> Square 1:1 app showcase graphic in a clean promotional style. Very dark
> desaturated background (#111816) with subtle abstract mountain-ridge shapes
> in the top area. Left side: the uploaded app icon rendered large with the
> title "Camino Nomad" in bold white geometric sans-serif and the subtitle
> "Hiking companion app" in warm orange (#F26B4E) beneath it. Right side: two
> overlapping modern smartphones in perspective showing a hiking navigation
> app with a map route, elevation graph and progress indicators in teal and
> orange tones. Matches a series of minimal dark app-showcase cards. No
> watermarks, no extra text.

- **Gem som:** `assets/img/camino-card.jpg` (500×500, < 100 KB)
- **Erstatter:** pladsholder-boksen (`.card__media--placeholder`) i Camino
  Nomad-kortet i `index.html`.
- **Valgfrit ekstra:** et bredt 16:9-banner i samme stil → `assets/img/camino-detail.jpg`,
  så Camino også får et lightbox-billede som de andre projekter.

---

## 3. Profilbillede — opskalering (forbedring, valgfrit)

Det nuværende profilbillede i "Om mig" er kun 400×400 px. **Upload
`../1689702552931.jpeg`:**

> Upscale and enhance this portrait photo to high resolution. Keep the face,
> glasses, hair, clothing and background EXACTLY as they are — only increase
> resolution, sharpness and clean up compression artifacts. Photorealistic,
> no beautification, no changes to likeness.

- **Gem som:** `assets/img/profil-jacob.jpg` (overskriv den nuværende; maks
  800×800, < 150 KB)

---

## 4. OG-/social-billede (valgfrit, men pænt ved deling)

Bruges når sitet deles på LinkedIn m.m. Lige nu bruges et app-screenshot som
midlertidigt og:image.

> Wide 1200x630 social preview banner for a developer portfolio. Deep dark
> petrol/teal gradient background (#0D2B32 to #061418) with a subtle network
> of thin glowing teal particle lines (#4FA3B2). Left-aligned text: "Jacob F.
> Welin" in large bold white geometric sans-serif, below it "Senior App
> Developer" in a warm copper tone (#C98A54) in a smaller monospaced style.
> Minimal, elegant, lots of dark negative space. No logos, no watermarks, no
> other text.

- **Gem som:** `assets/img/og-image.jpg` (1200×630, < 200 KB)
- **Opdatér:** `og:image` i `index.html` til `assets/img/og-image.jpg`.
