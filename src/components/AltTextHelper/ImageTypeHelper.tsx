import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  FormLabel,
  RadioButton,
  Button,
  Heading2,
  PreHeading,
  UnorderedList,
  UnorderedListItem,
  Paragraph,
} from '@utrecht/component-library-react/dist/css-module';

const groupName = 'image-type';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  onChangeOption;
  onNextStep;
  active;
}

export default function ImageTypeHelper({ onChangeOption, onNextStep, active }: ImageTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

  if (active === groupName) {
    return (
      <>
        <PreHeading>Stap 1 van 5</PreHeading>
        <Fieldset
          id="image-type-group"
          aria-describedby="image-type-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Wat voor type afbeelding is het?</FieldsetLegend>
          <FormFieldDescription id="image-type-group-description">
            Kies het belangrijkste doel van de afbeelding:
          </FormFieldDescription>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-type-contextual"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-type-contextual"
                name={groupName}
                value="context"
                defaultChecked={selectedOption === 'context'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">
                  De afbeelding geeft informatie die belangrijk is voor de inhoud van de pagina.
                </span>
                <br />
                Bijvoorbeeld een grafiek, geografische kaart, stappenplan, logo, foto of illustratie. Dit heet een
                informatieve afbeelding.
              </div>
            </FormLabel>
          </FormField>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-type-decorative"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-type-decorative"
                name={groupName}
                value="decorative"
                defaultChecked={selectedOption === 'decorative'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">
                  De afbeelding is alleen toegevoegd om de pagina er mooier uit te laten zien.
                </span>
                <br />
                Bijvoorbeeld een afbeelding in de achtergrond van een website, een icoon naast een tekst met dezelfde
                informatie of een sfeerbeeld zonder betekenis. Dit heet een decoratieve afbeelding.
              </div>
            </FormLabel>
          </FormField>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-type-functional"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-type-functional"
                name={groupName}
                value="functional"
                defaultChecked={selectedOption === 'functional'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">
                  De afbeelding wordt <em>alléén</em> gebruikt als een link of knop.
                </span>
                <br />
                Bijvoorbeeld een icoon om iets te downloaden, te vergroten of open te klappen. Dit heet een functionele
                afbeelding.
              </div>
            </FormLabel>
          </FormField>
          <Paragraph>
            Soms doet een afbeelding meer dan één ding. Bijvoorbeeld: een kaart waarop je kunt klikken, of een
            illustratie die ook een link is. Kies dan het belangrijkste doel van de afbeelding.
          </Paragraph>
        </Fieldset>

        <div className="nlds-button-next">
          <Button
            appearance="primary-action-button"
            disabled={selectedOption === '' ? true : false}
            onClick={() => {
              onChangeOption('type', selectedOption);
              onNextStep(groupName);
            }}
          >
            Volgende stap
          </Button>
        </div>

        <Heading2>Meer informatie over verschillende type afbeeldingen</Heading2>
        <UnorderedList>
          <UnorderedListItem>
            <a href="/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/">
              Meer voorbeelden van informatieve afbeeldingen
            </a>
            .
          </UnorderedListItem>
          <UnorderedListItem>
            <a href="/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/">
              Wanneer is een afbeelding decoratief?
            </a>
          </UnorderedListItem>
          <UnorderedListItem>
            <a href="/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/#logo-als-link-naar-de-homepage">
              Voorbeelden van functionele afbeeldingen
            </a>
            .
          </UnorderedListItem>
          <UnorderedListItem>
            <a href="/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/#logo-als-link-naar-de-homepage">
              Hoe om te gaan met een logo als link naar de homepage?
            </a>
          </UnorderedListItem>
        </UnorderedList>
      </>
    );
  }
}
