export const Texts = [
  {
    id: 'image-type-functional-help',
    group: 'image-type',
    heading: 'Als de afbeelding een link of knop is',
    content: `
    <p>Geef dan in de alt-tekst duidelijk aan wat er gebeurt als iemand erop klikt. Bijvvorbeeld:“Bekijk productinformatie” of “Ga naar contactpagina”</p>
    <p>Weet je niet precies wat je moet beschrijven? Bekijk dan de <a href="/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/#overwegingen">overwegingen bij functionele afbeeldingen</a>.</p>
    `,
  },
  {
    id: 'image-type-decorative-help',
    group: 'image-type',
    heading: 'Als de afbeelding alleen decoratief is',
    content: `
    <p>Laat dan het veld voor alternatieve tekst leeg. Zo wordt de afbeelding genegeerd door screenreaders.</p>
    <p>Weet je niet zeker of de afbeelding echt decoratief is? Vragen die je jezelf kunt stellen als je een decoratieve afbeelding plaatst:</p>
    <ul>
      <li>Waarom wil ik deze afbeelding plaatsen?</li>
      <li>Als ik de afbeelding weglaat, welke informatie gaat er dan verloren?</li>
      <li>Als ik deze afbeelding niét zou kunnen gebruiken, zou ik dan een vervangende afbeelding zoeken?</li>
    </ul>
    <h3 class="utrecht-heading-3">Context is belangrijk</h3>
    <p>De context bepaalt of een afbeelding decoratief of informatief is, en wat er precies in de alt-tekst moet staan. Bijvoorbeeld: Een afbeelding van een koe kan decoratief zijn bij een verhaal over het boerenleven, maar informatief in een artikel over verschillende koeienrassen.</p>
    `,
    additionals: ['image-clickable'],
  },
  {
    id: 'context-complex-image-help',
    group: 'context-type',
    heading: 'Als de afbeelding veel informatie bevat die niet in één korte beschrijving past',
    content: `
    <p>Voeg dan een uitgebreide beschrijving toe naast of onder de afbeelding. Zet in het veld voor alternatieve tekst een korte samenvatting, met een verwijzing naar de plek waar de langere beschrijving staat. Bijvoorbeeld: "Samenvatting van de grafiek. Uitgebreide uitleg staat onder de afbeelding.”</p>
    <p>Meer over hoe je alt-tekst combineert met een uitgebreide beschrijving vind je op <a href="/richtlijnen/content/afbeeldingen/alt-plaats/">Waar moet een alternatieve tekst staan?</a>.</p>
    <p>Een afbeelding met veel informatie wordt ook wel een complexe afbeelding genoemd.</p>
    <h3>Voorbeelden van complexe afbeeldingen</h3>
    <ul>
      <li>Grafiek</li>
      <li>Geografische kaart</li>
      <li>Schema</li>
      <li>Stappenplan</li>
    </ul>
    `,
  },
  {
    id: 'context-simple-image-help',
    group: 'context-type',
    heading: 'Als het een foto of eenvoudige illustratie is',
    content: `
    <p>Geef dan in het veld voor alternatieve tekst een korte beschrijving van wat er te zien is. Bijvoorbeeld: “Twee mensen in gesprek” of “Logo van gemeente X”.</p>
    <p>Wil je weten hoe je een goede alt-tekst schrijft en controleert? Bekijk <a href="/richtlijnen/content/afbeeldingen/algemene-richtlijnen/">Algemene richtlijnen voor alt-tekst</a>.</p>
    `,
    additionals: ['description-already-present', 'image-clickable'],
  },
  {
    id: 'text-near-image-help',
    group: 'text-type',
    heading: 'Als dezelfde tekst al naast of vlak bij de afbeelding staat',
    content: `
    <p>Laat dan het veld voor alternatieve tekst leeg. De informatie is al op een andere plek op de pagina beschikbaar.</p>
    <p>Lees meer over hoe je omgaat met tekst in afbeeldingen op de pagina <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">Tekst in een afbeelding</a>.</p>
    `,
    additionals: ['image-clickable'],
  },
  {
    id: 'text-visual-effect-help',
    group: 'text-type',
    heading: 'Als de tekst in de afbeelding niets toevoegt aan de boodschap',
    content: `
    <p>Dan is er geen alternatieve tekst nodig. Laat het veld voor alternatieve tekst leeg.</p>
    <p>Lees meer over hoe je omgaat met tekst in afbeeldingen op de pagina <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">Tekst in een afbeelding</a>.</p>
    <h3>Voorbeelden van afbeeldingen met tekst die geen toegevoegde waarde heeft</h3>
    <ul>
      <li>een watermerk</li>
      <li>tekst in een screenshot</li>
      <li>een stapel boeken</li>
    </ul>
    `,
    additionals: ['image-clickable'],
  },
  {
    id: 'text-only-image-help',
    group: 'text-type',
    heading: 'Als de tekst in de afbeelding niet op een andere plek op de pagina voorkomt',
    content: `
    <p>Schrijf dan de tekst over in het veld voor alternatieve tekst. Zo is de informatie ook beschikbaar voor mensen die de afbeelding niet kunnen zien.</p>
    <p>Lees meer over hoe je omgaat met tekst in afbeeldingen op de pagina <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">Tekst in een afbeelding</a>.</p>
    `,
    additionals: ['image-clickable'],
  },
  {
    id: 'text-has-function-help',
    group: 'text-type',
    heading: 'Als de afbeelding een functie heeft, zoals een icoon',
    content: `
    <p>Beschrijf dan in het veld voor alternatieve tekst wat de afbeelding doet of betekent. Bijvoorbeeld: “Download PDF” of “Let op”.</p>
    <p>Lees meer over hoe je omgaat met tekst in afbeeldingen op de pagina <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">Tekst in een afbeelding</a>.</p>
    `,
  },
  {
    id: 'text-complex-image-help',
    group: 'text-type',
    heading: 'Als de afbeelding veel informatie bevat die niet in één korte beschrijving past',
    content: `
    <p>Voeg dan een uitgebreide beschrijving toe naast of onder de afbeelding. Zet in het veld voor alternatieve tekst een korte samenvatting, met een verwijzing naar de plek waar de langere beschrijving staat. Bijvoorbeeld: “Samenvatting van de grafiek. Uitgebreide uitleg staat onder de afbeelding.”</p>
    <p>Meer over hoe je alt-tekst combineert met een uitgebreide beschrijving vind je op <a href="/richtlijnen/content/afbeeldingen/alt-plaats/">Waar moet een alternatieve tekst staan?</a>.</p>
    <p>Een afbeelding met veel informatie wordt ook wel een complexe afbeelding genoemd.</p>
    <h3>Voorbeelden van complexe afbeeldingen</h3>
    <ul>
      <li>Grafiek</li>
      <li>Geografische kaart</li>
      <li>Schema</li>
      <li>Stappenplan</li>
    </ul>
    `,
  },
  {
    id: 'description-already-present',
    group: 'additional-helper',
    heading: 'Als de beschrijving al naast, boven of onder de afbeelding staat',
    content: `Dan is een alt-tekst niet nodig. Laat het veld leeg: je herhaalt anders alleen wat al gezegd is.`,
  },
  {
    id: 'image-clickable',
    group: 'additional-helper',
    heading: 'Als de afbeelding óók klikbaar is',
    content: `Voeg dan na de beschrijving van de afbeelding nog een korte duidelijke beschrijving toe van wat er gebeurt als iemand erop klikt.`,
  },
];
