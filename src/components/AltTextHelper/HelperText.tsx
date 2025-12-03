import { SpotlightSection } from '@utrecht/component-library-react';
import {
  Heading2,
  Heading3,
  Button,
  Paragraph,
  PreHeading,
  OrderedList,
  OrderedListItem,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';

const groupName = 'helper-text';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface HelperTextProps {
  onPrevStep;
  active;
  image;
}

const translateType = (type) => {
  let translation = '';
  switch (type) {
    case 'simple':
      translation =
        'Het is een foto of een eenvoudige illustratie die helpt om de tekst op de pagina beter te begrijpen';
      break;
    case 'complex':
      translation =
        'Het is een grafiek, diagram of een andere complexe afbeelding die helpt om de tekst op de pagina beter te begrijpen';
      break;
    case 'decorative':
      translation = 'De afbeelding is alleen toegevoegd om de pagina er mooier uit te laten zien';
      break;
    case 'functional':
      translation = 'De afbeelding wordt als link of knop gebruikt';
      break;
  }
  return translation;
};

const translateTextContent = (content) => {
  let text = '';
  switch (content) {
    case 'text-near-image':
      text = 'ook al naast of vlakbij de afbeelding staat';
      break;
    case 'text-visual-effect':
      text = 'alleen bedoeld is voor het visuele effect en geen inhoudelijke betekenis heeft';
      break;
    case 'text-has-function':
      text = 'een functionele rol heeft';
      break;
    case 'text-only-image':
      text = 'nergens anders op de pagina staat beschreven';
      break;
  }
  return text;
};

export default function HelperText({ onPrevStep, active, image }: HelperTextProps) {
  if (active === groupName) {
    return (
      <>
        <div className="nlds-helper-text" ref={autoFocus} tabIndex={-1}>
          <PreHeading>Stap 5 van 5</PreHeading>
          <SpotlightSection>
            <Heading2>Advies voor jouw afbeelding</Heading2>
            <ImageTextHelperText image={image} />
            <ImageTypeHelperText image={image} />
            <ImageClickableHelperText image={image} />
          </SpotlightSection>
          <Heading2>Samenvatting van jouw keuzes</Heading2>
          <Paragraph>Jij hebt het volgende aangegeven over jouw afbeelding</Paragraph>
          <UnorderedList>
            <UnorderedListItem>{translateType(image.type)}</UnorderedListItem>
            {(image.clickable || image.descripted || image.text) && (
              <>
                {image.text && (
                  <UnorderedListItem>
                    De afbeelding bevat tekst die {translateTextContent(image.content)}.
                  </UnorderedListItem>
                )}
                {image.descripted && (
                  <UnorderedListItem>De afbeelding staat al beschreven in de buurt.</UnorderedListItem>
                )}
                {image.clickable && <UnorderedListItem>Het is óók een link of knop</UnorderedListItem>}
              </>
            )}
          </UnorderedList>
          <Heading2>Algemene richtlijnen voor de beschrijving van alternatieve tekst</Heading2>
          Bouw de alt-tekst altijd als volgt op:
          <OrderedList>
            <OrderedListItem>
              Beschrijf als eerste de tekst in de afbeelding, als deze tekst bevat die nergens anders op de pagina
              staat.
            </OrderedListItem>
            <OrderedListItem>Beschrijf vervolgens de afbeelding</OrderedListItem>
            <OrderedListItem>Beschrijf tot slot de functie, als de afbeelding klikbaar is.</OrderedListItem>
          </OrderedList>
        </div>
        <div className="nlds-button-bar">
          <Button appearance="secondary-action-button" onClick={() => onPrevStep(groupName)}>
            Vorige stap
          </Button>
        </div>
      </>
    );
  }
}

interface ImageTypeHelperTextProps {
  image;
}

export function ImageTypeHelperText({ image }: ImageTypeHelperTextProps) {
  switch (image.type) {
    case 'simple':
      return image.descripted ? <ImageDescriptionNearbyHelperText /> : <ImageTypeSimpleHelperText />;
    case 'complex':
      return <ImageTypeComplexHelperText />;
    case 'decorative':
      return <ImageTypeDecorativeHelperText />;
    case 'functional':
      return (
        <>
          <Heading3>Beschrijf de afbeelding alleen als de inhoud iets toevoegt</Heading3>
          <Paragraph>
            De afbeelding is klikbaar. Beschrijf alleen kort wat er te zien is als de inhoud iets toevoegt naast de
            functie.
          </Paragraph>
        </>
      );
  }
}

export function ImageDescriptionNearbyHelperText() {
  return (
    <>
      <Heading3>De afbeelding hoeft niet te worden beschreven</Heading3>
      <Paragraph>
        Omdat de tekst die de afbeelding beschrijft al in de buurt van de afbeelding staat, hoeft die informatie niet
        opnieuw te worden beschreven in de alt-tekst. Je mag wel een aanvullende beschrijving toevoegen als die echt
        iets toevoegt.
        <br />
        Voorbeeld: Staat de naam van een persoon onder de foto, dan hoeft die niet in de alt-tekst. Je kunt wel kort
        beschrijven hoe de persoon eruitziet, zodat iedereen een beeld krijgt.
      </Paragraph>
      <Paragraph>
        Wil je weten hoe je een goede alt-tekst schrijft en controleert? Bekijk
        <a href="/richtlijnen/content/afbeeldingen/algemene-richtlijnen/">Algemene richtlijnen voor alt-tekst</a>.
      </Paragraph>
    </>
  );
}

export function ImageTypeSimpleHelperText() {
  return (
    <>
      <Heading3>Beschrijf de afbeelding</Heading3>
      <Paragraph>
        Omdat dit een het een foto of eenvoudige illustratie is moet in het veld voor alternatieve tekst een korte
        beschrijving van wat er te zien is worden gegeven. Bijvoorbeeld: “Twee mensen in gesprek” of “Logo van gemeente
        X”.
      </Paragraph>
      <Paragraph>
        Wil je weten hoe je een goede alt-tekst schrijft en controleert? Bekijk{' '}
        <a href="/richtlijnen/content/afbeeldingen/algemene-richtlijnen/">Algemene richtlijnen voor alt-tekst</a>.
      </Paragraph>
    </>
  );
}

export function ImageTypeComplexHelperText() {
  return (
    <>
      <Heading3>Beschrijf de afbeelding uitgebreid</Heading3>
      <Paragraph>
        Omdat de afbeelding veel informatie bevat die niet in één korte beschrijving past moet een uitgebreide
        beschrijving worden toegevoegd naast of onder de afbeelding. Zet in het veld voor alternatieve tekst een korte
        samenvatting, met een verwijzing naar de plek waar de langere beschrijving staat. Bijvoorbeeld: "Samenvatting
        van de grafiek. Uitgebreide uitleg staat onder de afbeelding.”
      </Paragraph>
      <Paragraph>
        Meer over hoe je alt-tekst combineert met een uitgebreide beschrijving vind je op{' '}
        <a href="/richtlijnen/content/afbeeldingen/alt-plaats/">Waar moet een alternatieve tekst staan?</a>.
      </Paragraph>
    </>
  );
}

export function ImageTypeDecorativeHelperText() {
  return (
    <>
      <Heading3>De afbeelding hoeft niet te worden beschreven</Heading3>
      <Paragraph>
        Omdat de afbeelding alleen decoratief is hoeft de afbeelding zelf niet te worden beschreven. Sommige bezoekers
        die gebruikmaken van hulpsoftware willen juist wel een beschrijving krijgen van een decoratieve afbeelding. Je
        kunt er dus ook voor kiezen om jouw afbeelding wel een alternatieve tekst te geven. Meer over het beschrijven
        van sfeerbeelden vind je bij{' '}
        <a href="/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/">
          de richtlijnen voor decoratieve afbeeldingen
        </a>
        .
      </Paragraph>
    </>
  );
}

const Texts = [
  {
    id: 'text-near-image',
    header: 'De tekst in de afbeelding hoeft niet te worden beschreven',
    content:
      'Omdat dezelfde tekst al naast of vlak bij de afbeelding staat hoeft deze tekst niet te worden beschreven in de alternatieve tekst. Omdat de informatie al op een andere plek op de pagina beschikbaar is.',
  },
  {
    id: 'text-visual-effect',
    header: 'De tekst in de afbeelding hoeft niet te worden beschreven',
    content:
      'Omdat de tekst in de afbeelding niets toevoegt aan de boodschap hoeft deze tekst niet te worden beschreven in de alternatieve tekst.',
  },
  {
    id: 'text-has-function',
    header: 'Beschrijf de functie van de tekst in de afbeelding',
    content:
      'Omdat de afbeelding een functie heeft, zoals een icoon, moet in het veld voor alternatieve tekst worden beschreven wat de afbeelding doet of betekent. Bijvoorbeeld: “Download PDF” of “Let op”.',
  },
  {
    id: 'text-only-image',
    header: 'Beschrijf de tekst in de afbeelding',
    content:
      'Omdat de tekst in de afbeelding niet op een andere plek op de pagina voorkomt moet de tekst in het veld voor alternatieve tekst worden beschreven. Zo is de informatie ook beschikbaar voor mensen die de afbeelding niet kunnen zien.',
  },
];

const currentHelperText = (id) => {
  const text = Texts.find((o) => o.id === id);
  return text;
};

interface ImageTextHelperTextProps {
  image;
}

export function ImageTextHelperText({ image }: ImageTextHelperTextProps) {
  if (image.text && image.content !== '') {
    const helper = currentHelperText(image.content);
    return (
      <>
        <Heading3>{helper.header}</Heading3>
        <Paragraph>{helper.content} </Paragraph>
      </>
    );
  } else if (image.type === 'complex') {
    return (
      <>
        <Heading3>Beschrijf de tekst in de afbeelding</Heading3>
        <Paragraph>
          Dit is een complexe afbeelding. Als de afbeelding tekst bevat, beschrijf deze dan in de uitgebreide
          beschrijving van de afbeelding zelf.
        </Paragraph>
      </>
    );
  }
}

interface ImageClickableHelperTextProps {
  image;
}

export function ImageClickableHelperText({ image }: ImageClickableHelperTextProps) {
  if (image.clickable || image.type === 'functional') {
    return (
      <>
        <Heading3>Beschrijf wat er gebeurt als iemand op de afbeelding klikt</Heading3>
        <Paragraph>
          Omdat de afbeelding een link of knop is moet in de alt-tekst duidelijk worden aangegeven wat er gebeurt als
          iemand erop klikt. Bijvoorbeeld:“Bekijk productinformatie” of “Ga naar contactpagina”.
        </Paragraph>
        <Paragraph>
          Weet je niet precies wat je moet beschrijven? Bekijk dan de{' '}
          <a href="/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/#overwegingen">
            overwegingen bij functionele afbeeldingen
          </a>
          .
        </Paragraph>
      </>
    );
  }
}
