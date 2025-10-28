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
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="image-type-context" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="image-type-context"
              name="image-type"
              value="image-type-context-help"
              checked={checked === 'image-type-context-help'}
            />
            <strong>De afbeelding helpt om de tekst op de pagina beter te begrijpen.</strong>
            <br />
            Dit heet een informatieve afbeelding. Voorbeelden hiervan zijn een grafiek, een illustratie of een
            stappenplan.
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="image-type-decorative" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="image-type-decorative"
              name="image-type"
              value="image-type-decorative-help"
              checked={checked === 'image-type-decorative-help'}
            />
            <strong>De afbeelding is alleen toegevoegd om de pagina er mooier uit te laten zien.</strong>
            <br />
            Dit heet een decoratieve afbeelding, bijvoorbeeld een sfeerbeeld zonder betekenis.
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="image-type-text" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="image-type-text"
              name="image-type"
              value="image-type-text-help"
              checked={checked === 'image-type-text-help'}
            />
            <strong>De afbeelding bestaat hoofdzakelijk uit tekst die bedoeld is om gelezen te worden</strong>
            <br />
            Bijvoorbeeld: banners, afbeeldingen van flyers of de verkoopprijs van een product.
          </FormLabel>
        </Paragraph>
      </FormField>
      <FormField type="radio">
        <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel htmlFor="image-type-functional" type="radio">
            <RadioButton
              className="utrecht-form-field__input"
              id="image-type-functional"
              name="image-type"
              value="image-type-functional-help"
              checked={checked === 'image-type-functional-help'}
            />
            <strong>De afbeelding wordt gebruikt als een link of knop.</strong>
            Dit heet een functionele afbeelding.
          </FormLabel>
        </Paragraph>
      </FormField>
    </Fieldset>
  );
}

/*<RadioGroup
  description="Kies de optie die het beste past:"
  id="image-type-group"
  label="Wat is het doel van de afbeelding?"
  name="image-type"
  options={imageTypeOptions}
  onChange={onOptionChange}
/>

  const imageTypeOptions = [
{
  id: 'image-type-context',
  label:
    'De afbeelding helpt om de tekst op de pagina beter te begrijpen, zoals een grafiek of een illustratie bij een stappenplan',
  value: 'image-type-context-help',
},
{
  id: 'image-type-decorative',
  label:
    'De afbeelding is alleen toegevoegd om de pagina er mooier uit te laten zien, zoals een sfeerbeeld zonder betekenis ',
  value: 'image-type-decorative-help',
},
{
  id: 'image-type-text',
  label:
    'De afbeelding bestaat hoofdzakelijk uit tekst die bedoeld is om gelezen te worden, zoals bij banners, slogans of afbeeldingen van flyers.',
  value: 'image-type-text-help',
},
{
  id: 'image-type-functional',
  label: 'De afbeelding wordt gebruikt als een link of knop',
  value: 'image-type-functional-help',
},
];*/
