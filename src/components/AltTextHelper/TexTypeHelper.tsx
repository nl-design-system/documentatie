import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  FormLabel,
  RadioButton,
  Button,
} from '@utrecht/component-library-react/dist/css-module';

interface TextTypeHelperProps {
  onOptionChange;
  onGroupChange;
  activeGroup;
}

const groupName = 'text-type';

export default function TextTypeHelper({ onOptionChange, onGroupChange, activeGroup }: TextTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const changeSelected = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  const nextStep = () => {
    onGroupChange('');
    onOptionChange(selectedOption);
  };

  const prevStep = () => {
    onGroupChange('image-type');
    onOptionChange('');
  };

  if (activeGroup === groupName) {
    return (
      <Fieldset id="text-type-group" aria-describedby="text-type-group-description" role="radiogroup">
        <FieldsetLegend>Wat is het doel van de afbeelding?</FieldsetLegend>
        <FormFieldDescription id="text-type-group-description">Kies de optie die het beste past:</FormFieldDescription>
        <FormField type="radio">
          <FormLabel
            className="utrecht-form-field__label utrecht-form-field__label--radio"
            htmlFor="text-complex-image"
            type="radio"
          >
            <RadioButton
              className="utrecht-form-field__input"
              id="text-complex-image"
              name={groupName}
              value="text-complex-image-help"
              defaultChecked={selectedOption === 'text-complex-image-help'}
              onChange={changeSelected}
            />
            <span>
              <strong>Het gaat om een grafiek, tabel of andere complexe informatie.</strong>
            </span>
          </FormLabel>
        </FormField>
        <FormField type="radio">
          <FormLabel
            className="utrecht-form-field__label utrecht-form-field__label--radio"
            htmlFor="text-has-function"
            type="radio"
          >
            <RadioButton
              className="utrecht-form-field__input"
              id="text-has-function"
              name={groupName}
              value="text-has-function-help"
              defaultChecked={selectedOption === 'text-has-function-help'}
              onChange={changeSelected}
            />
            <span>
              <strong>De tekst heeft een functionele rol.</strong>
              <br />
              Bijvoorbeeld: een icoon met de letters PDF dat “Download PDF” of een uitroepteken dat “Let op” aanduidt.
            </span>
          </FormLabel>
        </FormField>
        <FormField type="radio">
          <FormLabel
            className="utrecht-form-field__label utrecht-form-field__label--radio"
            htmlFor="text-visual-effect"
            type="radio"
          >
            <RadioButton
              className="utrecht-form-field__input"
              id="text-visual-effect"
              name={groupName}
              value="text-visual-effect-help"
              defaultChecked={selectedOption === 'text-visual-effect-help'}
              onChange={changeSelected}
            />
            <span>
              <strong>De tekst is alleen voor het visuele effect en heeft geen inhoudelijke betekenis</strong>
              <br />
              Bijvoorbeeld: een watermerk of tekst in een screenshot.
            </span>
          </FormLabel>
        </FormField>
        <FormField type="radio">
          <FormLabel
            className="utrecht-form-field__label utrecht-form-field__label--radio"
            htmlFor="text-near-image"
            type="radio"
          >
            <RadioButton
              className="utrecht-form-field__input"
              id="text-near-image"
              name={groupName}
              value="text-near-image-help"
              defaultChecked={selectedOption === 'text-near-image-help'}
              onChange={changeSelected}
            />
            <span>
              <strong>Dezelfde tekst staat ook naast of vlak bij de afbeelding.</strong>
            </span>
          </FormLabel>
        </FormField>
        <FormField type="radio">
          <FormLabel
            className="utrecht-form-field__label utrecht-form-field__label--radio"
            htmlFor="text-only-image"
            type="radio"
          >
            <RadioButton
              className="utrecht-form-field__input"
              id="text-only-image"
              name={groupName}
              value="text-only-image-help"
              defaultChecked={selectedOption === 'text-only-image-help'}
              onChange={changeSelected}
            />
            <span>
              <strong>De tekst staat nergens anders op de pagina.</strong>
            </span>
          </FormLabel>
        </FormField>

        <div className="button-bar">
          <Button appearance="secondary-action-button" onClick={prevStep}>
            Vorige
          </Button>

          <Button appearance="primary-action-button" disabled={selectedOption === '' ? true : false} onClick={nextStep}>
            Volgende
          </Button>
        </div>
      </Fieldset>
    );
  }
}
