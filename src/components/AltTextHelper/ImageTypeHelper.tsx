import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  FormLabel,
  RadioButton,
} from '@utrecht/component-library-react/dist/css-module';

const groupName = 'image-type';

//const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  onChangeOption;
}

export default function ImageTypeHelper({ onChangeOption }: ImageTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <>
      <Fieldset
        id="image-type-group"
        aria-describedby="image-type-group-description"
        role="radiogroup"
        // ref={autoFocus}
        // tabIndex={-1}
      >
        <FieldsetLegend>Wat is het doel van de afbeelding?</FieldsetLegend>
        <FormFieldDescription id="image-type-group-description">Kies de optie die het beste past:</FormFieldDescription>
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
              value="image-type-contextual"
              defaultChecked={selectedOption === 'image-type-contextual'}
              onChange={(e) => {
                setSelectedOption(e.target.value);
                onChangeOption('decorative', false);
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
              value="image-type-decorative"
              defaultChecked={selectedOption === 'image-type-decorative'}
              onChange={(e) => {
                setSelectedOption(e.target.value);
                onChangeOption('decorative', true);
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
        {/* <div className="nlds-button-bar flex-end">
          <Button
            appearance="primary-action-button"
          >
            Volgende stap
          </Button>
        </div> */}
      </Fieldset>
    </>
  );
}
