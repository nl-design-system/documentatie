//import { RadioGroup } from '@utrecht/radio-group-react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  Paragraph,
  FormLabel,
  RadioButton,
} from '@utrecht/component-library-react/dist/css-module';

interface ContextTypeHelperProps {
  onOptionChange;
  checked;
}

export default function ContextTypeHelper({ onOptionChange, checked }: ContextTypeHelperProps) {
  return (
    <Fieldset
      id="context-type-group"
      aria-describedby="image-type-group-description"
      role="radiogroup"
      onChange={onOptionChange}
    >
      <FieldsetLegend>Wat voor soort afbeelding is het?</FieldsetLegend>
      <FormFieldDescription id="context-type-group-description">Kies de optie die het beste past:</FormFieldDescription>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="context-complex-image" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="context-complex-image"
              name="context-type"
              value="context-complex-image-help"
              checked={checked === 'context-complex-image-help'}
            />
            <strong>Het is een grafiek, diagram of een andere complexe afbeelding.</strong>
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="context-simple-image" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="context-simple-image"
              name="context-type"
              value="context-simple-image-help"
              checked={checked === 'context-simple-image-help'}
            />
            <strong>Het is een foto of een eenvoudige illustratie.</strong>
          </FormLabel>
        </Paragraph>
      </FormField>
    </Fieldset>
  );
}

// const contextTypeOptions = [
//   {
//     id: 'context-complex-image',
//     label: 'Het is een grafiek, diagram of een andere complexe afbeelding',
//     value: 'context-complex-image-help',
//   },
//   {
//     id: 'context-simple-image',
//     label: 'Het is een foto of een eenvoudige illustratie',
//     value: 'context-simple-image-help',
//   },
// ];
// <RadioGroup
//   description="Kies de optie die het beste past:"
//   id="context-type-group"
//   label="Wat voor soort afbeelding is het?"
//   name="context-type"
//   options={contextTypeOptions}
//   onChange={onOptionChange}
// />
