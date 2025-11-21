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

const groupName = 'text-type';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface TextTypeHelperProps {
  changeOption;
  changeGroup;
  activeGroup: string;
}

export default function TextTypeHelper({ changeOption, changeGroup, activeGroup }: TextTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const nextStep = () => {
    changeGroup('');
    changeOption(selectedOption);
  };

  const prevStep = () => {
    changeGroup('image-type');
    changeOption('');
  };

  if (activeGroup === groupName) {
    return (
      <>
        <PreHeading>Stap 2 van 3</PreHeading>
        <Fieldset
          id="text-type-group"
          aria-describedby="text-type-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Waarvoor is de tekst in de afbeelding bedoeld?</FieldsetLegend>
          <FormFieldDescription id="text-type-group-description">
            Kies de optie die het beste past:
          </FormFieldDescription>
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
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">Het gaat om een grafiek, tabel of andere complexe informatie.</span>
              </div>
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
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">De tekst heeft een functionele rol.</span>
                <br />
                Bijvoorbeeld: een icoon met de letters PDF dat “Download PDF” of een uitroepteken dat “Let op” aanduidt.
              </div>
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
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">
                  De tekst is alleen voor het visuele effect en heeft geen inhoudelijke betekenis
                </span>
                <br />
                Bijvoorbeeld een watermerk, tekst in een screenshot, een afbeelding van een verpakking of een stapel
                boeken.
              </div>
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
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">Dezelfde tekst staat ook naast of vlak bij de afbeelding.</span>
              </div>
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
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">De tekst staat nergens anders op de pagina.</span>
              </div>
            </FormLabel>
          </FormField>

          <div className="nlds-button-bar">
            <Button appearance="secondary-action-button" onClick={prevStep}>
              Terug
            </Button>

            <Button
              appearance="primary-action-button"
              disabled={selectedOption === '' ? true : false}
              onClick={nextStep}
            >
              Toon advies
            </Button>
          </div>
        </Fieldset>
      </>
    );
  }
}
