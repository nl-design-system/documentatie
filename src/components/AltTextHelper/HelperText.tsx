import { Heading2, Heading3, Button, Paragraph } from '@utrecht/component-library-react/dist/css-module';

const groupName = 'helper-text';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface HelperTextProps {
  onPrevStep;
  active;
  image;
}

export default function HelperText({ onPrevStep, active, image }: HelperTextProps) {
  if (active === groupName) {
    return (
      <>
        <div className="nlds-helper-text" ref={autoFocus} tabIndex={-1}>
          <Heading2>Wat moet er in de alt-tekst komen te staan?</Heading2>
          <Paragraph>Hier volgt de ingredienten lijst voor jouw afbeelding:</Paragraph>
          <ImageTextHelperText image={image} />
          <ImageTypeHelperText image={image} />
          <ImageClickableHelperText image={image} />
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
      return <ImageTypeSimpleHelperText />;
    case 'complex':
      return <ImageTypeComplexHelperText />;
    case 'decorative':
      return <ImageTypeDecorativeHelperText />;
  }
}

export function ImageTypeSimpleHelperText() {
  return (
    <>
      <Heading3>Als het een foto of eenvoudige illustratie is</Heading3>
      <Paragraph>
        Geef dan in het veld voor alternatieve tekst een korte beschrijving van wat er te zien is. Bijvoorbeeld: “Twee
        mensen in gesprek” of “Logo van gemeente X”.
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
      <Heading3>Als de afbeelding veel informatie bevat die niet in één korte beschrijving past</Heading3>
      <Paragraph>
        Voeg dan een uitgebreide beschrijving toe naast of onder de afbeelding. Zet in het veld voor alternatieve tekst
        een korte samenvatting, met een verwijzing naar de plek waar de langere beschrijving staat. Bijvoorbeeld:
        "Samenvatting van de grafiek. Uitgebreide uitleg staat onder de afbeelding.”
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
      <Heading3>Als de afbeelding alleen decoratief is</Heading3>
      <Paragraph>
        Dan hoeft de afbeelding zelf niet te worden beschreven. Maar <strong>let op</strong> als de afbeelding klikbaar
        is of tekst bevat dan kan het zijn dat de alt-tekst toch niet leeg gelaten mag worden.
      </Paragraph>
    </>
  );
}

const Texts = [
  {
    id: 'text-near-image',
    heading: 'en dezelfde tekst staat al naast of vlak bij de afbeelding',
    content:
      'Dan hoeft deze tekst niet te worden beschreven in de alternatieve tekst. Omdat de informatie al op een andere plek op de pagina beschikbaar is.',
  },
  {
    id: 'text-visual-effect',
    heading: 'en de tekst in de afbeelding voegt niets toe aan de boodschap',
    content: 'Dan hoeft deze tekst niet te worden beschreven in de alternatieve tekst.',
  },
  {
    id: 'text-has-function',
    heading: 'en de afbeelding heeft een functie, zoals een icoon',
    content:
      'Beschrijf dan in het veld voor alternatieve tekst wat de afbeelding doet of betekent. Bijvoorbeeld: “Download PDF” of “Let op”.',
  },
  {
    id: 'text-only-image',
    heading: 'en de tekst in de afbeelding komt niet op een andere plek op de pagina voor',
    content:
      'Schrijf dan de tekst over in het veld voor alternatieve tekst. Zo is de informatie ook beschikbaar voor mensen die de afbeelding niet kunnen zien.',
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
        <Heading3>Als de afbeelding tekst bevat {helper.heading}</Heading3>
        <Paragraph>{helper.content}</Paragraph>
      </>
    );
  }
}

interface ImageClickableHelperTextProps {
  image;
}

export function ImageClickableHelperText({ image }: ImageClickableHelperTextProps) {
  if (image.clickable) {
    return (
      <>
        <Heading3>Als de afbeelding een link of knop is</Heading3>
        <Paragraph>
          Geef dan in de alt-tekst duidelijk aan wat er gebeurt als iemand erop klikt. Bijvoorbeeld:“Bekijk
          productinformatie” of “Ga naar contactpagina”
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
