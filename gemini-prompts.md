# Billed-prompts til Gemini

Prompts til de billeder, der mangler eller kan forbedres. Kopiér prompten ind i
Gemini (Nano Banana / Imagen). Prompts er på engelsk — det giver de bedste
resultater. Under hver prompt står, hvor filen skal lande, og hvad den erstatter.

---

## 1. Hero-billede — ✅ FÆRDIG (ligger som `assets/img/profile/hero-jacob.jpg`)

Behold prompten herunder, hvis billedet skal genereres om:

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

- **Gem som:** `assets/img/profile/hero-jacob.jpg` (maks 1600 px høj, komprimér til < 300 KB
  — fx `sips --resampleHeight 1600 -s format jpeg -s formatOptions 80 <in> --out assets/img/profile/hero-jacob.jpg`)
- **Erstatter:** overskriv bare filen — `index.html` viser den allerede via
  `.hero__img`.

---

## 2. Camino Nomad — portefølje-kort (erstatter pladsholder-kortet)

Bruger den fælles moderne skabelon fra afsnit 6, så kortet matcher resten af
serien. **Upload disse filer sammen med prompten:**

- `../Images/Apps/camino-nomad/icon.png` (app-ikonet)
- `../Images/Apps/camino-nomad/1.PNG` (ruteplanlægning)
- `../Images/Apps/camino-nomad/2.PNG` (kort med Camino Francés-ruten)

> Square app showcase card, 1:1, 1000x1000. Background: very dark desaturated
> charcoal (#0B1417) with one large, soft radial glow in warm orange (#F47B20)
> at low opacity behind the right side, and a faint vignette at the edges.
> Right side: two modern iPhones with thin bezels and rounded corners,
> floating at a slight 8-degree tilt with soft realistic drop shadows. The
> phone screens must show EXACTLY the app UI from the two uploaded
> screenshots — use only the phone-screen content, ignore the orange
> marketing frame and headline text around them; do not invent or alter any
> UI. Left side, vertically centered: the uploaded app icon small with
> rounded corners, below it the app name "Camino Nomad" in bold white modern
> geometric sans-serif, and beneath it the subtitle "Plan your Camino" in
> warm orange (#F47B20). Minimal, premium, modern product-page aesthetic. No
> QR codes, no watermarks, no extra text, no reflections.

- **Gem som:** `assets/img/portfolio/camino-card.jpg` (nedskaleret til 500×500, < 100 KB)
- **Erstatter:** pladsholder-boksen (`.card__media--placeholder`) i Camino
  Nomad-kortet i `index.html` — bed Claude bytte den, når filen ligger klar.
- **Valgfrit ekstra:** et bredt 16:9-banner i samme stil (brug også screenshot
  `4.PNG`, hotel-booking) → `assets/img/portfolio/camino-detail.jpg`, så Camino
  også får et lightbox-billede som de andre projekter.

---

## 3. Profilbillede — opskalering (forbedring, valgfrit)

Det nuværende profilbillede i "Om mig" er kun 400×400 px. **Upload
`../1689702552931.jpeg`:**

> Upscale and enhance this portrait photo to high resolution. Keep the face,
> glasses, hair, clothing and background EXACTLY as they are — only increase
> resolution, sharpness and clean up compression artifacts. Photorealistic,
> no beautification, no changes to likeness.

- **Gem som:** `assets/img/profile/profil-jacob.jpg` (overskriv den nuværende; maks
  800×800, < 150 KB)

---

## 4. ProfCalculator — ret forkert undertekst i billederne (fejl i original-asset)

> **Spring a) over, hvis du kører redesign-serien i afsnit 6** — det nye
> ProfCalculator-kort får automatisk den rigtige undertekst dér. b)
> (lightbox-banneret) er stadig relevant.

Begge ProfCalculator-billeder har underteksten **"Food ordering system"** — en
copy-paste-fejl fra Leo's Wok i de gamle Wejeo-assets. Appen er en
profitberegner. Ret ét billede ad gangen:

**a) Upload `assets/img/portfolio/profcal-card.jpg` (kortet, 500×500):**

> Edit this image: replace ONLY the orange subtitle text "Food ordering
> system" under the "ProfCalculator" title with "Restaurant profit
> calculator" in the exact same font, size, color and position. Keep
> everything else in the image completely unchanged.

- **Gem som:** `assets/img/portfolio/profcal-card.jpg` (overskriv, 500×500, < 100 KB)

**b) Upload `assets/img/portfolio/profcal-detail.jpg` (lightbox-banneret, 1280×720):**

> Edit this image: replace ONLY the orange subtitle text "Food ordering
> system" under the "ProfCalculator" title with "Restaurant profit
> calculator" in the exact same font, size, color and position. Keep
> everything else in the image completely unchanged.

- **Gem som:** `assets/img/portfolio/profcal-detail.jpg` (overskriv, 1280 px bred, < 300 KB)

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

---

## 6. Moderne redesign af alle showcase-kort (valgfrit, men løfter hele grid'et)

De nuværende kort er fra Wejeo-tiden (2020-2023) og har QR-koder, "SCAN"-labels
og tunge diagonaler. Prompterne her genskaber alle kort i ÉN fælles, moderne
stil, der matcher sitets mørke tema — samme skabelon som Camino-kortet i
afsnit 2, kun app-navn, undertekst, brandfarve og uploads skifter.

**Fremgangsmåde pr. app:** upload (1) det gamle showcase-kort fra
`assets/img/portfolio/<app>-card.jpg` — det indeholder appens rigtige UI, som
Gemini skal genbruge — og (2) app-ikonet fra stien i hvert afsnit. Gem
resultatet oven i samme fil (nedskaleret til 500×500, < 100 KB). Generér gerne
alle 7 i samme chat, så stilen låses fast — start hver efterfølgende prompt med
"Same style and layout as the previous card:".

### 6a. ProfCalculator

Upload: `assets/img/portfolio/profcal-card.jpg` + `../Images/Apps/ProfCalculator/profcalculator-icon.png`

> Square app showcase card, 1:1, 1000x1000. Background: very dark desaturated
> charcoal (#0B1417) with one large, soft radial glow in bright blue (#1E7BE5)
> at low opacity behind the right side, and a faint vignette at the edges.
> Right side: two modern iPhones with thin bezels and rounded corners,
> floating at a slight 8-degree tilt with soft realistic drop shadows. The
> phone screens must show EXACTLY the app UI visible in the phones of the
> uploaded old showcase image — do not invent or alter any UI. Left side,
> vertically centered: the uploaded app icon small with rounded corners,
> below it the app name "ProfCalculator" in bold white modern geometric
> sans-serif, and beneath it the subtitle "Restaurant profit calculator" in
> bright blue (#1E7BE5). Minimal, premium, modern product-page aesthetic. No
> QR codes, no watermarks, no extra text, no reflections.

### 6b. Wall Dodge

Upload: `assets/img/portfolio/walldodge-card.jpg` + `../Images/Apps/WallDodge/wall-dodge-icon.jpg`

> Same style and layout as the previous card: square 1:1 1000x1000, charcoal
> background (#0B1417), soft radial glow behind the right side — here in cyan
> (#35E0E8) at low opacity. Two floating tilted iPhones on the right showing
> EXACTLY the game UI from the phones in the uploaded old showcase image (the
> dark brick-wall game) — do not invent UI. Left side: the uploaded app icon
> small, the name "Wall Dodge" in bold white geometric sans-serif, subtitle
> "Rotate to win" in cyan (#35E0E8). No QR codes, no watermarks, no extra
> text.

### 6c. Leo's Wok

Upload: `assets/img/portfolio/leoswok-card.jpg` + `../Images/Apps/LeosWok/leoswok-icon.png`

> Same style and layout as the previous card: square 1:1 1000x1000, charcoal
> background (#0B1417), soft radial glow behind the right side — here in
> fresh green (#2E8B45) at low opacity. Two floating tilted iPhones on the
> right showing EXACTLY the food-ordering UI from the phone in the uploaded
> old showcase image — do not invent UI. Left side: the uploaded app icon
> small, the name "Leo's Wok" in bold white geometric sans-serif, subtitle
> "Food ordering system" in fresh green (#2E8B45). No QR codes, no
> watermarks, no extra text.

### 6d. Chiang Mai Køge

Upload: `assets/img/portfolio/chiangmai-card.jpg` + `../Images/Apps/ChiangMai/chaingmai icon.png` + evt. `../Images/Apps/ChiangMai/chiangmai frontpage.png`

> Same style and layout as the previous card: square 1:1 1000x1000, charcoal
> background (#0B1417), soft radial glow behind the right side — here in warm
> pink-red (#E8375E) at low opacity. Right side: one floating tilted iPhone
> showing EXACTLY the restaurant app UI from the uploaded frontpage
> screenshot (or the food imagery from the old card arranged as one phone
> screen) — do not invent UI. Left side: the uploaded Chiangmai logo small,
> the name "Chiang Mai Køge" in bold white geometric sans-serif, subtitle
> "Authentic Thai cuisine" in warm pink-red (#E8375E). No QR codes, no
> watermarks, no extra text.

### 6e. Wejeo Smart

Upload: `assets/img/portfolio/wejeosmart-card.jpg` + `../Images/Apps/Wejeo Smart/Wejeo smart icon 512.png`

> Same style and layout as the previous card: square 1:1 1000x1000, charcoal
> background (#0B1417), soft radial glow behind the right side — here in warm
> orange (#F26B4E) at low opacity. Two floating tilted iPhones on the right
> showing EXACTLY the smart-home UI from the phones in the uploaded old
> showcase image (device list and switch schedules) — do not invent UI. Left
> side: the uploaded app icon small, the name "Wejeo Smart" in bold white
> geometric sans-serif, subtitle "Smart home control" in warm orange
> (#F26B4E). No QR codes, no watermarks, no extra text.

### 6f. Sejerslev

Upload: `assets/img/portfolio/sejerslev-card.jpg` + `../Images/Apps/Sejerslev/icon.png`

> Same style and layout as the previous card: square 1:1 1000x1000, charcoal
> background (#0B1417), soft radial glow behind the right side — here in
> light blue (#57AEE8) at low opacity. Two floating tilted iPhones on the
> right showing EXACTLY the welding-gauge UI from the phones in the uploaded
> old showcase image (gas flow and pressure gauges with graphs) — do not
> invent UI. Left side: the uploaded Sejerslev logo small, the name
> "Sejerslev" in bold white geometric sans-serif, subtitle "AI-driven welding
> app" in light blue (#57AEE8). No QR codes, no watermarks, no extra text.

### 6g. AB one

Upload: `assets/img/portfolio/abone-card.jpg` + `../Images/Apps/AB one/icon.png`

> Same style and layout as the previous card: square 1:1 1000x1000, charcoal
> background (#0B1417), soft radial glow behind the right side — here in
> green (#1B9E3E) at low opacity. One floating tilted iPhone on the right
> showing EXACTLY the member-profile UI from the phone in the uploaded old
> showcase image — do not invent UI. Left side: the uploaded AB one logo
> small, the name "AB one" in bold white geometric sans-serif, subtitle
> "Erhvervsnetværk" in green (#1B9E3E). No QR codes, no watermarks, no extra
> text.

**Efter generering:** nedskalér hvert kort og overskriv den gamle fil, fx:

```sh
sips -Z 500 -s format jpeg -s formatOptions 80 <ny>.png --out assets/img/portfolio/<app>-card.jpg
```

Kortene på sitet opdaterer sig selv (samme filnavne). Camino-kortet fra
afsnit 2 hører til samme serie.
