import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  FormLabel,
  RadioButton,
} from '@utrecht/component-library-react/dist/css-module';

interface ImageTypeHelperProps {
  onOptionChange;
  checked;
}

export default function ImageTypeHelper({ onOptionChange, checked }: ImageTypeHelperProps) {
  return (
    <Fieldset
      id="image-type-group"
      aria-describedby="image-type-group-description"
      role="radiogroup"
      onChange={onOptionChange}
    >
      <FieldsetLegend>Wat is het doel van de afbeelding?</FieldsetLegend>
      <FormFieldDescription id="image-type-group-description">Kies de optie die het beste past:</FormFieldDescription>
      <FormField type="radio">
        <FormLabel
          className="utrecht-form-field__label utrecht-form-field__label--radio"
          htmlFor="image-type-context"
          type="radio"
        >
          <RadioButton
            className="utrecht-form-field__input"
            id="image-type-context"
            name="image-type"
            value="image-type-context-help"
            defaultChecked={checked === 'image-type-context-help'}
          />
          <span>
            <strong>De afbeelding helpt om de tekst op de pagina beter te begrijpen.</strong>
            <br />
            Dit heet een informatieve afbeelding. Voorbeelden hiervan zijn een grafiek, een illustratie of een
            stappenplan.
          </span>
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
            name="image-type"
            value="image-type-decorative-help"
            defaultChecked={checked === 'image-type-decorative-help'}
          />
          <span>
            <strong>De afbeelding is alleen toegevoegd om de pagina er mooier uit te laten zien.</strong>
            <br />
            Dit heet een decoratieve afbeelding, bijvoorbeeld een sfeerbeeld zonder betekenis.
          </span>
        </FormLabel>
      </FormField>
      <FormField type="radio">
        <FormLabel
          className="utrecht-form-field__label utrecht-form-field__label--radio"
          htmlFor="image-type-text"
          type="radio"
        >
          <RadioButton
            className="utrecht-form-field__input"
            id="image-type-text"
            name="image-type"
            value="image-type-text-help"
            defaultChecked={checked === 'image-type-text-help'}
          />
          <span>
            <strong>De afbeelding bestaat hoofdzakelijk uit tekst die bedoeld is om gelezen te worden</strong>
            <br />
            Bijvoorbeeld: banners, afbeeldingen van flyers of de verkoopprijs van een product.
          </span>
        </FormLabel>
      </FormField>
      <FormField type="radio">
        <FormLabel
          className="utrecht-form-field__label utrecht-form-field__label--radio"
          htmlFor="image-type-functional"
          type="radio"
        >
          <RadioButton
            className="utrecht-form-field__input"
            id="image-type-functional"
            name="image-type"
            value="image-type-functional-help"
            defaultChecked={checked === 'image-type-functional-help'}
          />
          <span>
            <strong>De afbeelding wordt gebruikt als een link of knop.</strong>
            <br />
            Dit heet een functionele afbeelding.
          </span>
        </FormLabel>
      </FormField>
    </Fieldset>
  );
}
