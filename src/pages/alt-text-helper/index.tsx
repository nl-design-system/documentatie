import { useState } from 'react';

// import { Link } from '@site/src/components/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Heading2, PageContent, Paragraph, SpotlightSection } from '@utrecht/component-library-react/dist/css-module';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import './index.css';
import { RadioGroup } from '@utrecht/radio-group-react';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  const [showText, setShowText] = useState('');

  // const decisionMap = [
  //   { group: 'image-type', answer: 'image-type-text', decision: 'image-type-text-help' },
  //   { group: 'image-type', answer: 'image-type-functional', decision: 'image-type-functional-help' },
  //   { group: 'image-type', answer: 'image-type-context', decision: 'image-type-context-help' },
  //   { group: 'image-type', answer: 'image-type-decorative', decision: 'image-type-decorative-help' },
  //   { group: 'text-type', answer: 'text-near-image', decision: 'text-near-image-help' },
  //   { group: 'text-type', answer: 'text-visual-effect', decision: 'text-visual-effect-help' },
  //   { group: 'text-type', answer: 'text-only-image', decision: 'text-only-image-help' },
  //   { group: 'text-type', answer: 'text-has-function', decision: 'text-has-function-help' },
  //   { group: 'text-type', answer: 'text-complex-image', decision: 'text-complex-image-help' },
  //   { group: 'context-type', answer: 'context-complex-image', decision: 'context-complex-image-help' },
  //   { group: 'context-type', answer: 'context-simple-image', decision: 'context-simple-image-help' },
  // ];

  const HelperTexts = [
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

  const onOptionChange = (e) => {
    const elt = e.target;
    setShowText(elt.defaultValue);
  };

  function HelperTextSection() {
    const currentHelperText = () => {
      const obj = HelperTexts.find((o) => o.id === showText);

      console.log(obj);

      return obj;
    };
    return (
      currentHelperText() && (
        <SpotlightSection id={currentHelperText().id} type="info">
          <Heading2>{currentHelperText().heading}</Heading2>
          <Paragraph dangerouslySetInnerHTML={{ __html: currentHelperText().paragraph }}></Paragraph>
        </SpotlightSection>
      )
    );
  }

  return (
    <Layout title={`${siteConfig.title} - alt-tekst helper`}>
      <PageContent>
        <Heading1>Alt-tekst helper</Heading1>

        <Paragraph>bla: {showText}</Paragraph>

        <RadioGroup
          description="Kies de optie die het beste past:"
          id="image-type-group"
          label="Wat is het doel van de afbeelding?"
          name="image-type"
          options={[
            {
              id: 'image-type-text',
              label: 'De afbeelding bevat zichtbare tekst',
              defaultValue: 'image-type-text-help',
            },
            {
              id: 'image-type-functional',
              label: 'De afbeelding is een link of knop',
              defaultValue: 'image-type-functional-help',
            },
            {
              id: 'image-type-context',
              label: 'De afbeelding ondersteunt de inhoud van de pagina',
              defaultValue: 'image-type-context-help',
            },
            {
              id: 'image-type-decorative',
              label: 'De afbeelding is alleen decoratief',
              defaultValue: 'image-type-decorative-help',
            },
          ]}
          onChange={onOptionChange}
        />

        <RadioGroup
          description="Kies de optie die het beste past:"
          id="text-type-group"
          label="Wat voor soort tekst staat er in de afbeelding?"
          name="text-type"
          options={[
            {
              id: 'text-near-image',
              label: 'Dezelfde tekst staat ook naast of vlak bij de afbeelding',
              defaultValue: 'text-near-image-help',
            },
            {
              id: 'text-visual-effect',
              label: 'De tekst is alleen voor het visuele effect en heeft geen inhoudelijke betekenis',
              defaultValue: 'text-visual-effect-help',
            },
            {
              id: 'text-only-image',
              label: 'De tekst staat nergens anders op de pagina',
              defaultValue: 'text-only-image-help',
            },
            {
              id: 'text-has-function',
              label: 'De tekst heeft een functionele rol, zoals bij een icoon',
              defaultValue: 'text-has-function-help',
            },
            {
              id: 'text-complex-image',
              label: 'Het gaat om een grafiek, tabel of andere complexe informatie',
              defaultValue: 'text-complex-image-help',
            },
          ]}
          onChange={onOptionChange}
        />

        <RadioGroup
          description="Kies de optie die het beste past:"
          id="context-type-group"
          label="Wat voor soort afbeelding is het?"
          name="context-type"
          options={[
            {
              id: 'context-complex-image',
              label: 'Het is een grafiek, diagram of een andere complexe afbeelding',
              defaultValue: 'context-complex-image-help',
            },
            {
              id: 'context-simple-image',
              label: 'Het is een foto of een eenvoudige illustratie',
              defaultValue: 'context-simple-image-help',
            },
          ]}
          onChange={onOptionChange}
        />

        <HelperTextSection />
      </PageContent>
    </Layout>
  );
};

export default Home;
