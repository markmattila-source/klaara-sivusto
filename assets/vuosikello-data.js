/* Klaaran vuosikello-data. Käytössä sekä talouden-vuosikello.html:ssä (koko kortti)
   että index.html:ssä (yksi rivi tilastojen alla). Yksi lähde, ei duplikaattia. */

const VUOSIKELLO_DATA = [
  {
    nimi: "Tammikuu", lyh: "Tam", teema: "Vuoden aloitus",
    etusivuLyhyt: "aseta säästötavoite",
    tehtavat: [
      { leima: "FAKTA", teksti: "Kokoa edellisvuoden remonttikuitit kotitalousvähennystä varten." },
      { leima: "TARKISTA", teksti: "Aseta vuoden säästötavoite.", linkki: "korkoa-korolle-laskuri.html" }
    ]
  },
  {
    nimi: "Helmikuu", lyh: "Hel", teema: "Vakuutukset",
    etusivuLyhyt: "tarkista vakuutus",
    tehtavat: [
      { leima: "TARKISTA", teksti: "Koti- tai kiinteistövakuutuksen hinta ja turva. Kilpailuta jos yli 2 v." }
    ]
  },
  {
    nimi: "Maaliskuu", lyh: "Maa", teema: "Sähkö ennen kesää",
    etusivuLyhyt: "vertaa sähkösopimusta",
    tehtavat: [
      { leima: "TARKISTA", teksti: "Kiinteä vs pörssi omalla kulutuksella.", linkki: "sahkosopimus-laskuri.html" }
    ]
  },
  {
    nimi: "Huhtikuu", lyh: "Huh", teema: "Remontti & koti",
    etusivuLyhyt: "laske remontti",
    tehtavat: [
      { leima: "FAKTA", teksti: "Tämän vuoden työt ehtivät tämän vuoden vähennykseen." },
      { leima: "TARKISTA", teksti: "Remontti tai osto.", linkki: "remontti-asuntokauppa.html" }
    ]
  },
  {
    nimi: "Toukokuu", lyh: "Tou", teema: "Auto",
    etusivuLyhyt: "vertaa autoa",
    tehtavat: [
      { leima: "TARKISTA", teksti: "Osto vs liisaus samalla jaksolla.", linkki: "auto-osto-vs-liisaus.html" }
    ]
  },
  {
    nimi: "Kesäkuu", lyh: "Kes", teema: "Käyttö ja kulutus",
    etusivuLyhyt: "tarkista tilaukset",
    tehtavat: [
      { leima: "TARKISTA", teksti: "Tilaukset jotka rullaavat kesälläkin.", linkki: "tilauslaskuri.html" }
    ]
  },
  {
    nimi: "Heinäkuu", lyh: "Hei", teema: "Puolivuotistarkistus",
    etusivuLyhyt: "tarkista säästötavoite",
    tehtavat: [
      { leima: "TARKISTA", teksti: "Säästötavoite puolivälissä.", linkki: "korkoa-korolle-laskuri.html" }
    ]
  },
  {
    nimi: "Elokuu", lyh: "Elo", teema: "Asuminen",
    etusivuLyhyt: "tarkista asumiskulut",
    tehtavat: [
      { leima: "TARKISTA", teksti: "Vastike, korko, onko kokonaiskuva muuttunut.", linkki: "remontti-asuntokauppa.html" }
    ]
  },
  {
    nimi: "Syyskuu", lyh: "Syy", teema: "Asuntokauppa",
    etusivuLyhyt: "laske asuntokauppa",
    tehtavat: [
      { leima: "FAKTA", teksti: "Varainsiirtovero 1,5 % osake / 3 % kiinteistö. Ensiasunnon vapaus poistui 2024." },
      { leima: "TARKISTA", teksti: "Kokonaishinta ennen tarjousta.", linkki: "remontti-asuntokauppa.html" }
    ]
  },
  {
    nimi: "Lokakuu", lyh: "Lok", teema: "Lämmitys",
    etusivuLyhyt: "vertaa sähkösopimusta",
    tehtavat: [
      { leima: "TARKISTA", teksti: "Talven sähkösopimus kuntoon.", linkki: "sahkosopimus-laskuri.html" }
    ]
  },
  {
    nimi: "Marraskuu", lyh: "Mar", teema: "Ensi vuoden kulut",
    etusivuLyhyt: "tarkista tilaukset",
    tehtavat: [
      { leima: "TARKISTA", teksti: "Tilaukset ja sopimukset jotka uusiutuvat vuodenvaihteessa.", linkki: "tilauslaskuri.html" }
    ]
  },
  {
    nimi: "Joulukuu", lyh: "Jou", teema: "Ensi vuosi",
    etusivuLyhyt: "aseta ensi vuoden tavoite",
    tehtavat: [
      { leima: "FAKTA", teksti: "Kotitalousvähennys on kalenterivuosi — tämän vuoden työt tämän vuoden vähennykseen." },
      { leima: "TARKISTA", teksti: "Ensi vuoden tavoite.", linkki: "korkoa-korolle-laskuri.html" }
    ]
  }
];
