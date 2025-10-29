import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
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
        <FormLabel
          className="utrecht-form-field__label utrecht-form-field__label--radio"
          htmlFor="context-complex-image"
          type="radio"
        >
          <RadioButton
            className="utrecht-form-field__input"
            id="context-complex-image"
            name="context-type"
            value="context-complex-image-help"
            defaultChecked={checked === 'context-complex-image-help'}
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
            name="context-type"
            value="context-simple-image-help"
            defaultChecked={checked === 'context-simple-image-help'}
          />
          <span>
            <strong>Het is een foto of een eenvoudige illustratie.</strong>
          </span>
        </FormLabel>
      </FormField>
    </Fieldset>
  );
}
