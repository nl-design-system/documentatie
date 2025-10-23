import { RadioGroup } from '@utrecht/radio-group-react';

const textTypeOptions = [
  {
    id: 'text-complex-image',
    label: 'Het gaat om een grafiek, tabel of andere complexe informatie',
    value: 'text-complex-image-help',
  },
  {
    id: 'text-has-function',
    label: 'De tekst heeft een functionele rol, zoals bij een icoon dat “Download PDF” of “Let op” aanduidt',
    value: 'text-has-function-help',
  },
  {
    id: 'text-visual-effect',
    label:
      'De tekst is alleen voor het visuele effect en heeft geen inhoudelijke betekenis, zoals een watermerk of tekst in een screenshot',
    value: 'text-visual-effect-help',
  },
  {
    id: 'text-near-image',
    label: 'Dezelfde tekst staat ook naast of vlak bij de afbeelding',
    value: 'text-near-image-help',
  },
  {
    id: 'text-only-image',
    label: 'De tekst staat nergens anders op de pagina',
    value: 'text-only-image-help',
  },
];

interface TextTypeHelperProps {
  onOptionChange;
}

export default function TextTypeHelper({ onOptionChange }: TextTypeHelperProps) {
  return (
    <RadioGroup
      description="Kies de optie die het beste past:"
      id="text-type-group"
      label="Wat voor soort tekst staat er in de afbeelding?"
      name="text-type"
      options={textTypeOptions}
      onChange={onOptionChange}
    />
  );
}
