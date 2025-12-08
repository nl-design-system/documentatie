import { SpotlightSection } from '@utrecht/component-library-react';
import {
  Heading2,
  Heading3,
  Paragraph,
  PreHeading,
  // OrderedList,
  // OrderedListItem,
  // UnorderedList,
  // UnorderedListItem,
  Link,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconChevronLeft } from '@utrecht/web-component-library-react';

const groupName = 'helper-text';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface HelperTextProps {
  onPrevStep;
  active;
  image;
}

// const translateType = (type) => {
//   let translation = '';
//   switch (type) {
//     case 'simple':
//       translation =
//         'Het is een foto of een eenvoudige illustratie die helpt om de tekst op de pagina beter te begrijpen';
//       break;
//     case 'complex':
//       translation =
//         'Het is een grafiek, diagram of een andere complexe afbeelding die helpt om de tekst op de pagina beter te begrijpen';
//       break;
//     case 'decorative':
//       translation = 'De afbeelding is alleen toegevoegd om de pagina er mooier uit te laten zien';
//       break;
//     case 'functional':
//       translation = 'De afbeelding wordt als link of knop gebruikt';
//       break;
//   }
//   return translation;
// };

// const translateTextContent = (content) => {
//   let text = '';
//   switch (content) {
//     case 'text-near-image':
//       text = 'ook al naast of vlakbij de afbeelding staat';
//       break;
//     case 'text-visual-effect':
//       text = 'alleen bedoeld is voor het visuele effect en geen inhoudelijke betekenis heeft';
//       break;
//     case 'text-has-function':
//       text = 'een functionele rol heeft';
//       break;
//     case 'text-only-image':
//       text = 'nergens anders op de pagina staat beschreven';
//       break;
//   }
//   return text;
// };

export default function HelperText({ onPrevStep, active, image }: HelperTextProps) {
  if (active === groupName) {
    return (
      <>
        <div className="nlds-button-previous">
          <UtrechtIconChevronLeft className="nlds-link-back" />
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPrevStep(groupName);
            }}
          >
            Vorige stap
          </Link>
        </div>

        <div className="nlds-helper-text" ref={autoFocus} tabIndex={-1}>
          <PreHeading>Stap 5 van 5</PreHeading>
          <SpotlightSection>
            <Heading2>Advies over jouw afbeelding</Heading2>
            <Paragraph>
              <strong>Let op:</strong> dit advies helpt je op weg, maar deze keuzehulp kan niet alle situaties
              beoordelen. Controleer daarom altijd zelf of de alt-tekst klopt voor jouw pagina.
            </Paragraph>
            <ImageTextHelperText image={image} />
            <ImageTypeHelperText image={image} />
            <ImageClickableHelperText image={image} />
            <Heading3>Bouw de alt-tekst in een vaste volgorde op</Heading3>
            <Paragraph>
              Moeten er meerdere onderdelen in de alt-tekst staan? Zet ze dan in een logische volgorde: eerst de tekst
              in de afbeelding, dan de niet-tekstuele inhoud die te zien is, daarna wat er gebeurt als iemand erop
              klikt.
            </Paragraph>
          </SpotlightSection>
          {/* <Heading2>Jouw keuzes</Heading2>
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
          </UnorderedList> */}
          {/* <Heading3>Algemene richtlijnen voor alt-teksten</Heading3>
          Het advies hierboven geldt voor jouw afbeelding. De richtlijnen hieronder gelden voor alle alt-teksten.
          <OrderedList>
            <OrderedListItem>
              Beschrijf eerst de tekst in de afbeelding, als die nergens anders op de pagina staat.
            </OrderedListItem>
            <OrderedListItem>Beschrijf daarna de afbeelding</OrderedListItem>
            <OrderedListItem>Beschrijf tot slot de functie, als de afbeelding klikbaar is.</OrderedListItem>
          </OrderedList> */}
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
      <Heading3>Herhaal geen informatie die al in de buurt staat</Heading3>
      <Paragraph>
        Omdat de tekst die de afbeelding uitlegt al bij de afbeelding staat, hoeft die informatie niet opnieuw in de
        alt-tekst. Je kunt wel iets extra's toevoegen als dat echt helpt. Voorbeeld: staat de naam van een persoon onder
        de foto, dan hoeft die niet in de alt-tekst. Je kunt wel kort beschrijven hoe de persoon eruitziet, zodat
        iedereen een beeld krijgt.
      </Paragraph>
      <Paragraph>
        Wil je weten hoe je een goede alt-tekst schrijft en controleert? Bekijk{' '}
        <a href="/richtlijnen/content/afbeeldingen/algemene-richtlijnen/">de algemene richtlijnen voor alt-tekst</a>.
      </Paragraph>
    </>
  );
}

export function ImageTypeSimpleHelperText() {
  return (
    <>
      <Heading3>Beschrijf wat er te zien is</Heading3>
      <Paragraph>
        Omdat dit een foto of eenvoudige illustratie is moet in het veld voor alternatieve tekst een korte beschrijving
        worden gegeven van wat er te zien is. Bijvoorbeeld: “Twee mensen in gesprek” of “Logo van gemeente X”.
      </Paragraph>
      <Paragraph>
        Wil je weten hoe je een goede alt-tekst schrijft en controleert? Bekijk{' '}
        <a href="/richtlijnen/content/afbeeldingen/algemene-richtlijnen/">de algemene richtlijnen voor alt-tekst</a>.
      </Paragraph>
    </>
  );
}

export function ImageTypeComplexHelperText() {
  return (
    <>
      <Heading3>Plaats een uitgebreide beschrijving in de buurt van de afbeelding</Heading3>
      <Paragraph>
        Omdat de afbeelding veel informatie bevat die niet in één korte beschrijving past moet een uitgebreide
        beschrijving worden toegevoegd naast of onder de afbeelding. Zet in het veld voor alternatieve tekst een korte
        samenvatting, met een verwijzing naar de plek waar de langere beschrijving staat. Bijvoorbeeld: "Samenvatting
        van de grafiek. Uitgebreide uitleg staat onder de afbeelding.”
      </Paragraph>
      <Paragraph>
        Hoe je een alt-tekst combineert met een uitgebreide beschrijving vind je op{' '}
        <a href="/richtlijnen/content/afbeeldingen/alt-plaats/">waar moet een alternatieve tekst staan?</a>.
      </Paragraph>
    </>
  );
}

export function ImageTypeDecorativeHelperText() {
  return (
    <>
      <Heading3>Laat decoratieve beeldinhoud weg, tenzij het iets toevoegt</Heading3>
      <Paragraph>
        Als de afbeelding alleen decoratief is, hoef je deze niet te beschrijven. Sommige mensen die hulpsoftware
        gebruiken vinden het juist prettig om wel een beschrijving te krijgen. Je kunt er daarom voor kiezen om toch een
        alt-tekst toe te voegen. Meer over het beschrijven van sfeerbeelden vind je bij{' '}
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
      'Omdat dezelfde tekst al in de buurt van de afbeelding staat hoeft deze niet te worden beschreven in de alternatieve tekst. De informatie is dan namelijk al beschikbaar.',
  },
  {
    id: 'text-visual-effect',
    header: 'De tekst in de afbeelding hoeft niet te worden beschreven',
    content:
      'Omdat de tekst in de afbeelding alleen is bedoeld als visueel element en geen belangrijke informatie toevoegt, hoeft deze niet te worden beschreven in de alternatieve tekst.',
  },
  {
    id: 'text-has-function',
    header: 'Beschrijf de functie van de tekst in de afbeelding',
    content:
      'Omdat de tekst een functie heeft moet in het veld voor alternatieve tekst worden beschreven wat de afbeelding doet of betekent. Bijvoorbeeld: “Download PDF” voor een icoon met de letters PDF, "Meer informatie over..." voor een icoon met de letter I of “Let op” voor een uitroepteken.',
  },
  {
    id: 'text-only-image',
    header: 'Beschrijf de tekst in de afbeelding',
    content:
      'Omdat de tekst in de afbeelding belangrijk is voor de inhoud, en niet op een andere plek op de pagina voorkomt, moet de tekst in het veld voor alternatieve tekst worden beschreven. Zo is de informatie ook beschikbaar voor mensen die de afbeelding niet kunnen zien.',
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
        <Paragraph>
          <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">
            Meer informatie over tekst in een afbeelding
          </a>
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
          iemand erop klikt. Bijvoorbeeld:“Bekijk productinformatie” of “Ga naar de contactpagina”.
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
