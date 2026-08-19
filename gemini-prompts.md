# Billed-prompts til Gemini

Prompts til de billeder, der mangler eller kan forbedres. Kopiér prompten ind i
Gemini (Nano Banana / Imagen). Prompts er på engelsk — det giver de bedste
resultater. Under hver prompt står, hvor filen skal lande, og hvad den erstatter.

---

## 1. Hero-billede (VIGTIGST — erstatter pladsholderen i hero-sektionen)

**Upload dit nyeste portrætbillede sammen med prompten.** Undgå at bede om
"studio backdrop", "rim light" og krydsede arme — det er dét, der giver det
syntetiske stock-foto-look. Prompten her går efter et naturligt, dokumentarisk
udtryk på næsten sort baggrund (den smelter sammen med sitets #061418-grund):

> Photo edit of the man in the uploaded photo. Keep his face, glasses, hair
> and likeness EXACTLY as in the original — do not change or beautify his
> facial features. Change the setting: a candid, editorial photograph, NOT a
> posed studio portrait. He stands at a slight angle to the camera, body
> relaxed, one hand loosely in his trouser pocket, the other hanging
> naturally; genuine relaxed expression. Wardrobe as in the original photo.
> Background: matte near-black charcoal (#0A0E10), softly out of focus, no
> visible backdrop texture. Lighting: one large soft window-like key light
> from the side, gentle natural falloff into shadow — no colored rim lights,
> no teal or blue tint. Natural skin texture with visible pores, very subtle
> film grain, shot on an 85mm lens at f/2. Vertical 4:5 crop, photorealistic,
> high resolution.

Ser det stadig for opstillet ud, så prøv varianter af posen i samme prompt:
"leaning slightly against a dark wall", "adjusting his watch strap while
looking at the camera" eller "sitting on a stool, forearms resting on knees".

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

## 4. ProfCalculator — ret forkert undertekst i billederne (fejl i original-asset)

Begge ProfCalculator-billeder har underteksten **"Food ordering system"** — en
copy-paste-fejl fra Leo's Wok i de gamle Wejeo-assets. Appen er en
profitberegner. Ret ét billede ad gangen:

**a) Upload `assets/img/profcal-card.jpg` (kortet, 500×500):**

> Edit this image: replace ONLY the orange subtitle text "Food ordering
> system" under the "ProfCalculator" title with "Restaurant profit
> calculator" in the exact same font, size, color and position. Keep
> everything else in the image completely unchanged.

- **Gem som:** `assets/img/profcal-card.jpg` (overskriv, 500×500, < 100 KB)

**b) Upload `assets/img/profcal-detail.jpg` (lightbox-banneret, 1280×720):**

> Edit this image: replace ONLY the orange subtitle text "Food ordering
> system" under the "ProfCalculator" title with "Restaurant profit
> calculator" in the exact same font, size, color and position. Keep
> everything else in the image completely unchanged.

- **Gem som:** `assets/img/profcal-detail.jpg` (overskriv, 1280 px bred, < 300 KB)

---

## 5. OG-/social-billede (valgfrit, men pænt ved deling)

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
