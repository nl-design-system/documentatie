import { RadioGroup } from '@utrecht/radio-group-react';
import type { ReactElement } from 'react';

export default function TextTypeGroup(): ReactElement | null {
  return (
    <RadioGroup
      description="Kies de optie die het beste past:"
      id="text-type-group"
      label="Wat voor soort tekst staat er in de afbeelding?"
      name="text-type"
      options={[
        {
          id: 'text-near-image',
          label: 'Dezelfde tekst staat ook naast of vlak bij de afbeelding',
          value: 'text-near-image-help',
        },
        {
          id: 'text-visual-effect',
          label: 'De tekst is alleen voor het visuele effect en heeft geen inhoudelijke betekenis',
          value: 'text-visual-effect-help',
        },
        {
          id: 'text-only-image',
          label: 'De tekst staat nergens anders op de pagina',
          value: 'text-only-image-help',
        },
        {
          id: 'text-has-function',
          label: 'De tekst heeft een functionele rol, zoals bij een icoon',
          value: 'text-has-function-help',
        },
        {
          id: 'text-complex-image',
          label: 'Het gaat om een grafiek, tabel of andere complexe informatie',
          value: 'text-complex-image-help',
        },
      ]}
    />
  );
}
