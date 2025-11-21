import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  FormLabel,
  RadioButton,
  Button,
  PreHeading,
} from '@utrecht/component-library-react/dist/css-module';

const groupName = 'image-type';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  changeOption;
  changeGroup;
  activeGroup: string;
}

export default function ImageTypeHelper({ changeOption, changeGroup, activeGroup }: ImageTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const nextStep = () => {
    if (selectedOption === 'text-type' || selectedOption === 'context-type') {
      changeOption('');
      changeGroup(selectedOption);
    } else {
      changeGroup('');
      changeOption(selectedOption);
    }
  };

  if (activeGroup === groupName) {
    return (
      <>
        <PreHeading>Stap 1 van 3</PreHeading>
        <Fieldset
          id="image-type-group"
          aria-describedby="image-type-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Wat is het doel van de afbeelding?</FieldsetLegend>
          <FormFieldDescription id="image-type-group-description">
            Soms doet een afbeelding meer dan één ding.
            <br />
            Bijvoorbeeld: een kaart waarop je kunt klikken, of een illustratie die ook een link is.
            <br />
            Kies wat het belangrijkste is dat de afbeelding laat zien.
          </FormFieldDescription>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-type-context"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-type-context"
                name={groupName}
                value="context-type"
                defaultChecked={selectedOption === 'context-type'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">De afbeelding helpt om de tekst op de pagina beter te begrijpen.</span>
                <br />
                Dit heet een informatieve afbeelding. Bijvoorbeeld een grafiek, een schema, een stappenplan, een
                geografische kaart of een illustratie.
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
                value="image-type-decorative-help"
                defaultChecked={selectedOption === 'image-type-decorative-help'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">
                  De afbeelding is alleen toegevoegd om de pagina er mooier uit te laten zien.
                </span>
                <br />
                Dit heet een decoratieve afbeelding. Bijvoorbeeld een afbeelding in de achtergrond van een website, een
                icoon naast een tekst met dezelfde informatie of een sfeerbeeld zonder betekenis.
              </div>
            </FormLabel>
          </FormField>
          {/* <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-type-text"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-type-text"
                name={groupName}
                value="text-type"
                defaultChecked={selectedOption === 'text-type'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">
                  De afbeelding bestaat hoofdzakelijk uit tekst die bedoeld is om gelezen te worden
                </span>
                <br />
                Bijvoorbeeld banners of afbeeldingen van flyers, acties of aankondigingen.
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
                value="image-type-functional-help"
                defaultChecked={selectedOption === 'image-type-functional-help'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">De afbeelding wordt alleen gebruikt als een link of knop.</span>
                <br />
                Dit heet een functionele afbeelding.
              </div>
            </FormLabel>
          </FormField> */}
          <div className="nlds-button-bar flex-end">
            <Button
              appearance="primary-action-button"
              disabled={selectedOption === '' ? true : false}
              onClick={nextStep}
            >
              Volgende stap
            </Button>
          </div>
        </Fieldset>
      </>
    );
  }
}
