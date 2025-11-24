import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormFieldCheckbox,
  Button,
} from '@utrecht/component-library-react/dist/css-module';

const groupName = 'extra-checks';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  onChangeOption;
  onPrevStep;
  onNextStep;
  active;
}

export default function ExtraChecks({ onChangeOption, onPrevStep, onNextStep, active }: ImageTypeHelperProps) {
  const [checkedOptions, setCheckedOptions] = useState({
    text: false,
    clickable: false,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setCheckedOptions((values) => ({ ...values, [name]: value }));
    onChangeOption(name, value);
  };

  if (active === groupName) {
    return (
      <>
        <Fieldset
          id="additional-checks-group"
          aria-describedby="additional-checks-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Welke kenmerken zijn van toepassing op de afbeelding?</FieldsetLegend>
          <FormFieldDescription id="additional-checks-group-description">
            Vink de toepasselijke opties aan:
          </FormFieldDescription>
          <FormFieldCheckbox
            id="image-contains-text"
            label="De afbeelding bevat zichtbare tekt"
            name="text"
            defaultChecked={!!checkedOptions.text}
            onChange={handleChange}
          />
          <FormFieldCheckbox
            id="image-is-clickable"
            label="De afbeelding is een link of knop"
            name="clickable"
            defaultChecked={!!checkedOptions.clickable}
            onChange={handleChange}
          />

          <div className="nlds-button-bar">
            <Button appearance="secondary-action-button" onClick={() => onPrevStep(groupName)}>
              Vorige stap
            </Button>

            <Button appearance="primary-action-button" onClick={() => onNextStep(groupName)}>
              Volgende stap
            </Button>
          </div>
        </Fieldset>
      </>
    );
  }
}
