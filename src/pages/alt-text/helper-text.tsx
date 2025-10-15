import { Heading3, Paragraph, SpotlightSection } from '@utrecht/component-library-react/dist/css-module';
// import { Link } from '@site/src/components/Link';
import type { ReactElement } from 'react';

export default function HelperText(helperTextId): ReactElement | null {
  const currentHelperText = () => {
    const text = Texts.find((o) => o.id === helperTextId.id);

    return text;
  };

  const Texts = [
    {
      id: 'image-type-functional-help',
      heading: 'Als de afbeelding een link of knop is',
      paragraph:
        'Geef dan in de alt-tekst duidelijk aan wat er gebeurt als iemand erop klikt.<br/>Bijvoorbeeld: “Bekijk productinformatie” of “Ga naar contactpagina”.',
    },
    {
      id: 'text-near-image-help',
      heading: 'Als dezelfde tekst al naast of vlak bij de afbeelding staat',
      paragraph:
        'Laat dan het veld voor alternatieve tekst leeg. De informatie is al op een andere plek op de pagina beschikbaar.',
    },
    {
      id: 'text-visual-effect-help',
      heading: 'Als de tekst in de afbeelding alleen voor het oog is en geen betekenis heeft op de pagina',
      paragraph: 'Dan is er geen alternatieve tekst nodig. Laat het veld voor alternatieve tekst leeg.',
    },
    {
      id: 'image-type-decorative-help',
      heading: 'Als de afbeelding alleen decoratief is',
      paragraph: 'Laat dan het veld voor alternatieve tekst leeg. Zo wordt de afbeelding genegeerd door screenreaders.',
      linktext: 'Belangrijke overwegingen bij het bepalen of een afbeelding decoratief is',
      linkurl: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/#overwegingen',
    },
    {
      id: 'text-only-image-help',
      heading: 'Als de tekst in de afbeelding niet op een andere plek op de pagina voorkomt',
      paragraph:
        'Schrijf dan de tekst over in het veld voor alternatieve tekst. Zo is de informatie ook beschikbaar voor mensen die de afbeelding niet kunnen zien.',
    },
    {
      id: 'text-has-function-help',
      heading: 'Als de afbeelding een functie heeft, zoals een icoon',
      paragraph:
        'Beschrijf dan in het veld voor alternatieve tekst wat de afbeelding doet of betekent.<br/>Bijvoorbeeld: “Download PDF” of “Let op”.',
    },
    {
      id: 'text-complex-image-help',
      heading: 'Als de afbeelding veel informatie bevat die niet in één korte beschrijving past',
      paragraph:
        'Voeg dan een uitgebreide beschrijving toe naast of onder de afbeelding. Zet in het veld voor alternatieve tekst een korte samenvatting, met een verwijzing naar de plek waar de langere beschrijving staat.<br/>Voorbeeld: “Samenvatting van de grafiek. Uitgebreide uitleg staat onder de afbeelding.”',
    },
    {
      id: 'context-complex-image-help',
      heading: 'Als de afbeelding veel informatie bevat die niet in één korte beschrijving past',
      paragraph:
        'Voeg dan een uitgebreide beschrijving toe naast of onder de afbeelding. Zet in het veld voor alternatieve tekst een korte samenvatting, met een verwijzing naar de plek waar de langere beschrijving staat.<br/>Voorbeeld: “Samenvatting van de grafiek. Uitgebreide uitleg staat onder de afbeelding.”',
    },
    {
      id: 'context-simple-image-help',
      heading: 'Als het een foto of eenvoudige illustratie is',
      paragraph:
        'Geef dan in het veld voor alternatieve tekst een korte beschrijving van wat er te zien is.<br/>Bijvoorbeeld: “Twee mensen in gesprek” of “Logo van gemeente X”.',
    },
  ];

  if (currentHelperText()) {
    return (
      <SpotlightSection type="info">
        <Heading3>{currentHelperText().heading}</Heading3>
        <Paragraph dangerouslySetInnerHTML={{ __html: currentHelperText().paragraph }}></Paragraph>
      </SpotlightSection>
    );
  } else {
    return null;
  }
}
