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

interface ContextTypeHelperProps {
  changeOption;
  changeGroup;
  activeGroup;
}

const groupName = 'context-type';

export default function ContextTypeHelper({ changeOption, changeGroup, activeGroup }: ContextTypeHelperProps) {
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
      <Fieldset id="context-type-group" aria-describedby="image-type-group-description" role="radiogroup">
        <FieldsetLegend>Wat voor soort afbeelding is het?</FieldsetLegend>
        <FormFieldDescription id="context-type-group-description">
          Kies de optie die het beste past:
        </FormFieldDescription>
        <FormField type="radio">
          <FormLabel
            className="utrecht-form-field__label utrecht-form-field__label--radio"
            htmlFor="context-complex-image"
            type="radio"
          >
            <RadioButton
              className="utrecht-form-field__input"
              id="context-complex-image"
              name={groupName}
              value="context-complex-image-help"
              defaultChecked={selectedOption === 'context-complex-image-help'}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
            />
            <span>
              <strong>Het is een grafiek, diagram of een andere complexe afbeelding.</strong>
            </span>
          </FormLabel>
        </FormField>
        <FormField type="radio">
          <FormLabel
            className="utrecht-form-field__label utrecht-form-field__label--radio"
            htmlFor="context-simple-image"
            type="radio"
          >
            <RadioButton
              className="utrecht-form-field__input"
              id="context-simple-image"
              name={groupName}
              value="context-simple-image-help"
              defaultChecked={selectedOption === 'context-simple-image-help'}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
            />
            <span>
              <strong>Het is een foto of een eenvoudige illustratie.</strong>
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
