import { RadioGroup } from '@utrecht/radio-group-react';

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
];

interface ImageTypeHelperProps {
  onOptionChange;
}

export default function ImageTypeHelper({ onOptionChange }: ImageTypeHelperProps) {
  return (
    <RadioGroup
      description="Kies de optie die het beste past:"
      id="image-type-group"
      label="Wat is het doel van de afbeelding?"
      name="image-type"
      options={imageTypeOptions}
      onChange={onOptionChange}
    />
  );
}
