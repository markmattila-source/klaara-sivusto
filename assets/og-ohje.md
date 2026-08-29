# OG-kuva — tekemättä, ohje myöhempää toteutusta varten

Tätä tiedostoa (`assets/og.jpg`) ei ole vielä olemassa. Sivuilla ei siksi ole
`og:image`-tagia — parempi näyttää ei mitään kuin rikkinäinen kuva somejaoissa.

## Kun kuva tehdään

**Koko:** 1200×630 px (Facebook/LinkedIn/X-standardi)
**Tausta:** `--paperi` #F2F5F1

**Vasen puoli:**
Otsikko Frauncesilla (700), suuri, tumma `--muste` #16241F:
"Mitä tämä asunto maksaa?"

**Oikea puoli:**
Violetti kortti (sama tyyli kuin etusivun hero-mockup):
- Tausta `--violetti-2` #4B4590 tai liuku `--violetti-3`→`--violetti-2`
- Iso luku Frauncesilla (700), valkoinen: "301 675 €"
- Pieni rivi altapäin: "Velaton + vero + remontin netto"

**Alareuna:**
Pieni teksti IBM Plex Monolla, `--muste-2`:
"klaaralaskuri.fi"

## Käyttöönotto myöhemmin

Kun `assets/og.jpg` on olemassa, lisää jokaiselle sivulle (tai vähintään
etusivulle ja lippulaivalle):

```html
<meta property="og:image" content="https://klaaralaskuri.fi/assets/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

Muista myös `twitter:card` jos halutaan optimoida X:n esikatselu erikseen:

```html
<meta name="twitter:card" content="summary_large_image">
```
