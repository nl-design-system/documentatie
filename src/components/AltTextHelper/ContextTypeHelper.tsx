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

const groupName = 'context-type';

// const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  onChangeOption;
  onPrevStep;
  onNextStep;
  active;
}

export default function ContextTypeHelper({ onChangeOption, onPrevStep, onNextStep, active }: ImageTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

  if (active === groupName) {
    return (
      <>
        <Fieldset
          id="context-type-group"
          aria-describedby="image-type-group-description"
          role="radiogroup"
          // ref={autoFocus}
          // tabIndex={-1}
        >
          <FieldsetLegend>Wat voor soort afbeelding is het?</FieldsetLegend>
          <FormFieldDescription id="context-type-group-description">
            Kies de optie die het beste past:
          </FormFieldDescription>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-complex"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-complex"
                name={groupName}
                value="image-complex"
                defaultChecked={selectedOption === 'image-complex'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  onChangeOption('complex', true);
                }}
              />
              <div>
                <span className="bold-text">Het is een grafiek, diagram of een andere complexe afbeelding.</span>
              </div>
            </FormLabel>
          </FormField>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-simple"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-simple"
                name={groupName}
                value="image-simple"
                defaultChecked={selectedOption === 'image-simple'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  onChangeOption('complex', false);
                }}
              />
              <div>
                <span className="bold-text">Het is een foto of een eenvoudige illustratie.</span>
              </div>
            </FormLabel>
          </FormField>

          <div className="nlds-button-bar">
            <Button appearance="secondary-action-button" onClick={() => onPrevStep(groupName)}>
              Vorige stap
            </Button>

            <Button
              appearance="primary-action-button"
              disabled={selectedOption === '' ? true : false}
              onClick={() => onNextStep(groupName)}
            >
              Volgende stap
            </Button>
          </div>
        </Fieldset>
      </>
    );
  }
}
