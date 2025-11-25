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
          <Heading2>Volgorde van beschrijven</Heading2>
          <Paragraph>
            Niet elke afbeelding bevat dezelfde onderdelen. Gebruik daarom deze volgorde om de alt-tekst op te bouwen
            met wat er wél aanwezig is:
          </Paragraph>
          <Heading3>1. Tekst in de afbeelding </Heading3>
          <ImageTextHelperText image={image} />
          <Heading3>2. Beschrijving van de afbeelding zelf</Heading3>
          <ImageTypeHelperText image={image} />
          <Heading3>3. Doel van de afbeelding</Heading3>
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
      return image.descripted ? <ImageDescriptionNearbyHelperText /> : <ImageTypeSimpleHelperText />;
    case 'complex':
      return <ImageTypeComplexHelperText />;
    case 'decorative':
      return <ImageTypeDecorativeHelperText />;
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
        Omdat de afbeelding alleen decoratief is hoeft de afbeelding zelf niet te worden beschreven. Maar als de
        afbeelding klikbaar is of tekst bevat dan kan het zijn dat de alt-tekst toch niet leeg gelaten mag worden.
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
