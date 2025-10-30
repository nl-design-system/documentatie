import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  FormLabel,
  RadioButton,
} from '@utrecht/component-library-react/dist/css-module';

interface TextTypeHelperProps {
  onOptionChange;
  checked;
}

export default function TextTypeHelper({ onOptionChange, checked }: TextTypeHelperProps) {
  return (
    <Fieldset
      id="text-type-group"
      aria-describedby="text-type-group-description"
      role="radiogroup"
      onChange={onOptionChange}
    >
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
            name="text-type"
            value="text-complex-image-help"
            checked={checked === 'text-complex-image-help'}
          />
          <strong>Het gaat om een grafiek, tabel of andere complexe informatie.</strong>
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
            name="text-type"
            value="text-has-function-help"
            checked={checked === 'text-has-function-help'}
          />
          <strong>De tekst heeft een functionele rol.</strong>
          <br />
          Bijvoorbeeld: een icoon met de letters PDF dat “Download PDF” of een uitroepteken dat “Let op” aanduidt.
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
            name="text-type"
            value="text-visual-effect-help"
            checked={checked === 'text-visual-effect-help'}
          />
          <strong>De tekst is alleen voor het visuele effect en heeft geen inhoudelijke betekenis</strong>
          <br />
          Bijvoorbeeld: een watermerk of tekst in een screenshot.
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
            name="text-type"
            value="text-near-image-help"
            checked={checked === 'text-near-image-help'}
          />
          <strong>Dezelfde tekst staat ook naast of vlak bij de afbeelding.</strong>
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
            name="text-type"
            value="text-only-image-help"
            checked={checked === 'text-only-image-help'}
          />
          <strong>De tekst staat nergens anders op de pagina.</strong>
        </FormLabel>
      </FormField>
    </Fieldset>
  );
}
