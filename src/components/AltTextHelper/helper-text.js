export const Texts = [
  {
    id: 'image-type-functional-help',
    group: 'image-type',
    heading: 'Als de afbeelding een link of knop is',
    paragraph: `Geef dan in de alt-tekst duidelijk aan wat er gebeurt als iemand erop klikt.
      <br/>
      <span class="bold-text">Bijvoorbeeld:</span> “Bekijk productinformatie” of “Ga naar contactpagina”.<br/>
      Weet je niet precies wat je moet beschrijven? Bekijk dan de <a href="/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/#overwegingen">overwegingen bij functionele afbeeldingen</a>.`,
  },
  {
    id: 'image-type-decorative-help',
    group: 'image-type',
    heading: 'Als de afbeelding alleen decoratief is',
    paragraph: `Laat dan het veld voor alternatieve tekst leeg. Zo wordt de afbeelding genegeerd door screenreaders.
      Weet je niet zeker of de afbeelding echt decoratief is? Bekijk dan de <a href="/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/#overwegingen">overwegingen bij decoratieve afbeeldingen</a>.`,
    additionals: ['image-clickable'],
  },
  {
    id: 'context-complex-image-help',
    group: 'context-type',
    heading: 'Als de afbeelding veel informatie bevat die niet in één korte beschrijving past',
    paragraph: `Voeg dan een uitgebreide beschrijving toe naast of onder de afbeelding. Zet in het veld voor alternatieve tekst een korte samenvatting, met een verwijzing naar de plek waar de langere beschrijving staat.
    <br/>
    <span class="bold-text">Bijvoorbeeld:</span> “Samenvatting van de grafiek. Uitgebreide uitleg staat onder de afbeelding.”<br/>
    Meer over hoe je alt-tekst combineert met een uitgebreide beschrijving vind je op <a href="/richtlijnen/content/afbeeldingen/alt-plaats/">Waar moet een alternatieve tekst staan?</a>.`,
  },
  {
    id: 'context-simple-image-help',
    group: 'context-type',
    heading: 'Als het een foto of eenvoudige illustratie is',
    paragraph: `Geef dan in het veld voor alternatieve tekst een korte beschrijving van wat er te zien is.
      <br/>
      <span class="bold-text">Bijvoorbeeld:</span> “Twee mensen in gesprek” of “Logo van gemeente X”.<br/>
      Wil je weten hoe je een goede alt-tekst schrijft en controleert? Bekijk <a href="/richtlijnen/content/afbeeldingen/algemene-richtlijnen/">Algemene richtlijnen voor alt-tekst</a>.`,
    additionals: ['description-already-present', 'image-clickable'],
  },
  {
    id: 'text-near-image-help',
    group: 'text-type',
    heading: 'Als dezelfde tekst al naast of vlak bij de afbeelding staat',
    paragraph: `Laat dan het veld voor alternatieve tekst leeg. De informatie is al op een andere plek op de pagina beschikbaar.<br/>
    Lees meer over hoe je omgaat met tekst in afbeeldingen op de pagina <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">Tekst in een afbeelding</a>.`,
    additionals: ['image-clickable'],
  },
  {
    id: 'text-visual-effect-help',
    group: 'text-type',
    heading: 'Als de tekst in de afbeelding niets toevoegt aan de boodschap',
    paragraph: `Dan is er geen alternatieve tekst nodig. Laat het veld voor alternatieve tekst leeg.<br/>
    Lees meer over hoe je omgaat met tekst in afbeeldingen op de pagina <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">Tekst in een afbeelding</a>.`,
    additionals: ['image-clickable'],
  },
  {
    id: 'text-only-image-help',
    group: 'text-type',
    heading: 'Als de tekst in de afbeelding niet op een andere plek op de pagina voorkomt',
    paragraph: `Schrijf dan de tekst over in het veld voor alternatieve tekst. Zo is de informatie ook beschikbaar voor mensen die de afbeelding niet kunnen zien.<br/>
    Lees meer over hoe je omgaat met tekst in afbeeldingen op de pagina <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">Tekst in een afbeelding</a>.`,
    additionals: ['image-clickable'],
  },
  {
    id: 'text-has-function-help',
    group: 'text-type',
    heading: 'Als de afbeelding een functie heeft, zoals een icoon',
    paragraph: `Beschrijf dan in het veld voor alternatieve tekst wat de afbeelding doet of betekent.
    <br/>
    <span class="bold-text">Bijvoorbeeld:</span> “Download PDF” of “Let op”.<br/>
    Lees meer over hoe je omgaat met tekst in afbeeldingen op de pagina <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">Tekst in een afbeelding</a>.`,
  },
  {
    id: 'text-complex-image-help',
    group: 'text-type',
    heading: 'Als de afbeelding veel informatie bevat die niet in één korte beschrijving past',
    paragraph: `Voeg dan een uitgebreide beschrijving toe naast of onder de afbeelding. Zet in het veld voor alternatieve tekst een korte samenvatting, met een verwijzing naar de plek waar de langere beschrijving staat.
    <br/>
    <span class="bold-text">Bijvoorbeeld:</span> “Samenvatting van de grafiek. Uitgebreide uitleg staat onder de afbeelding.”<br/>
    Meer over hoe je alt-tekst combineert met een uitgebreide beschrijving vind je op <a href="/richtlijnen/content/afbeeldingen/alt-plaats/">Waar moet een alternatieve tekst staan?</a>.`,
  },
  {
    id: 'description-already-present',
    group: 'additional-helper',
    heading: 'Als de beschrijving al naast, boven of onder de afbeelding staat',
    paragraph: `Dan is een alt-tekst niet nodig. Laat het veld leeg: je herhaalt anders alleen wat al gezegd is.`,
  },
  {
    id: 'image-clickable',
    group: 'additional-helper',
    heading: 'Als de afbeelding óók klikbaar is',
    paragraph: `Voeg dan na de beschrijving van de afbeelding nog een korte duidelijke beschrijving toe van wat er gebeurt als iemand erop klikt.`,
  },
];
