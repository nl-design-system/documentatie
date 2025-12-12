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
        <Fieldset
          id="image-type-group"
          aria-describedby="image-type-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Wat is het doel van de afbeelding?</FieldsetLegend>
          <FormFieldDescription id="image-type-group-description">
            Kies de optie die het beste past:
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
                Bijvoorbeeld een afbeelding met een icoon dat aangeeft dat je iets kunt downloaden, vergroten of
                openklappen. Dit heet een functionele afbeelding.
              </div>
            </FormLabel>
          </FormField>
          <Paragraph>
            Soms heeft een afbeelding meer dan één functie, zoals een kaart waarop je kunt klikken, een logo dat linkt
            naar de homepage of een afbeelding die je kunt vergroten. Kies dan het belangrijkste doel van de afbeelding.
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
