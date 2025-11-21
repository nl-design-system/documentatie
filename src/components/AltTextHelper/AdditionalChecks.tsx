import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormFieldCheckbox,
} from '@utrecht/component-library-react/dist/css-module';

// const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  onChangeOption;
}

export default function AdditionalChecks({ onChangeOption }: ImageTypeHelperProps) {
  const [checkedOptions, setCheckedOptions] = useState({
    text: false,
    clickable: false,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setCheckedOptions((values) => ({ ...values, [name]: value }));
    onChangeOption(name, checkedOptions[name]);
  };

  return (
    <>
      <Fieldset
        id="additional-checks-group"
        aria-describedby="additional-checks-group-description"
        role="radiogroup"
        // ref={autoFocus}
        // tabIndex={-1}
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

        {/* <div className="nlds-button-bar">
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
        </div> */}
      </Fieldset>
    </>
  );
}
