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
      translation = 'eenvoudige';
      break;
    case 'complex':
      translation = 'complexe';
      break;
    case 'decorative':
      translation = 'decoratieve';
      break;
    case 'functional':
      translation = 'functionele';
      break;
  }
  return translation;
};

const translateTextContent = (content) => {
  let text = '';
  switch (content) {
    case 'text-near-image':
      text = 'al naast of vlak bij de afbeelding staat';
      break;
    case 'text-visual-effect':
      text = 'niets toevoegt aan de boodschap';
      break;
    case 'text-has-function':
      text = 'een functie heeft';
      break;
    case 'text-only-image':
      text = 'nergens anders op de pagina staat';
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
          <Heading2>Advies algemeen</Heading2>
          Bouw de alt-tekst altijd als volgt op:
          <OrderedList>
            <OrderedListItem>
              Beschrijf als eerste de tekst in de afbeelding, als deze tekst bevat die nergens anders op de pagina
              staat.
            </OrderedListItem>
            <OrderedListItem>Beschrijf vervolgens de afbeelding</OrderedListItem>
            <OrderedListItem>Beschrijf tot slot de functie, als de afbeelding klikbaar is.</OrderedListItem>
          </OrderedList>
          <SpotlightSection>
            <Heading2>Advies specifiek voor jouw afbeelding</Heading2>
            <Paragraph>
              Je heb aangegeven dat het een <strong>{translateType(image.type)}</strong> afbeelding is.
            </Paragraph>
            {(image.clickable || image.descripted || image.text) && (
              <UnorderedList>
                {image.text && (
                  <UnorderedListItem>
                    De afbeelding bevat tekst die {translateTextContent(image.content)}.
                  </UnorderedListItem>
                )}
                {image.descripted && (
                  <UnorderedListItem>De beschrijving staat al in de buurt van de afbeelding.</UnorderedListItem>
                )}
                {image.clickable && <UnorderedListItem>De afbeelding is klikbaar.</UnorderedListItem>}
              </UnorderedList>
            )}
            <ImageTextHelperText image={image} />
            <Heading3>Beschrijving van de afbeelding</Heading3>
            <ImageTypeHelperText image={image} />
            <ImageClickableHelperText image={image} />
          </SpotlightSection>
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
        <Paragraph>
          De afbeelding is klikbaar. Beschrijf alleen kort wat er te zien is als de inhoud iets toevoegt naast de
          functie.
        </Paragraph>
      );
  }
}

export function ImageDescriptionNearbyHelperText() {
  return (
    <>
      <Paragraph>
        Omdat de tekst die de afbeelding beschrijft al boven, onder of naast de afbeelding staat, hoeft die informatie
        niet opnieuw te worden beschreven in de alt-tekst. Je mag wel een aanvullende beschrijving toevoegen als die
        echt iets toevoegt.
        <br />
        Voorbeeld: Staat de naam van een persoon onder de foto, dan hoeft die niet in de alt-tekst. Je kunt wel kort
        beschrijven hoe de persoon eruitziet, zodat iedereen een beeld krijgt.
      </Paragraph>
      <Paragraph>
        Wil je weten hoe je een goede alt-tekst schrijft en controleert? Bekijk{' '}
        <a href="/richtlijnen/content/afbeeldingen/algemene-richtlijnen/">Algemene richtlijnen voor alt-tekst</a>.
      </Paragraph>
    </>
  );
}

export function ImageTypeSimpleHelperText() {
  return (
    <>
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
      <Paragraph>
        Omdat de afbeelding alleen decoratief is hoeft de afbeelding zelf niet te worden beschreven.
      </Paragraph>
    </>
  );
}

const Texts = [
  {
    id: 'text-near-image',
    content:
      'Omdat dezelfde tekst al naast of vlak bij de afbeelding staat hoeft deze tekst niet te worden beschreven in de alternatieve tekst. Omdat de informatie al op een andere plek op de pagina beschikbaar is.',
  },
  {
    id: 'text-visual-effect',
    content:
      'Omdat de tekst in de afbeelding niets toevoegt aan de boodschap hoeft deze tekst niet te worden beschreven in de alternatieve tekst.',
  },
  {
    id: 'text-has-function',
    content:
      'Omdat de afbeelding een functie heeft, zoals een icoon, moet in het veld voor alternatieve tekst worden beschreven wat de afbeelding doet of betekent. Bijvoorbeeld: “Download PDF” of “Let op”.',
  },
  {
    id: 'text-only-image',
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
        <Heading3>Beschrijving van de tekst</Heading3>
        <Paragraph>{helper.content}</Paragraph>
      </>
    );
  } else if (image.type === 'complex') {
    return (
      <>
        <Heading3>Beschrijving van de tekst</Heading3>
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
        <Heading3>Beschrijving van het doel van de klikbare afbeelding </Heading3>
        <Paragraph>
          Omdat de afbeelding een link of knop is moet in de alt-tekst duidelijk worden aangegeven wat er gebeurt als
          iemand erop klikt. Bijvoorbeeld:“Bekijk productinformatie” of “Ga naar contactpagina”
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
