import { RadioGroup } from '@utrecht/radio-group-react';
import type { ReactElement } from 'react';

export default function ContextTypeGroup(): ReactElement | null {
  return (
    <RadioGroup
      description="Kies de optie die het beste past:"
      id="context-type-group"
      label="Wat voor soort afbeelding is het?"
      name="context-type"
      options={[
        {
          id: 'context-complex-image',
          label: 'Het is een grafiek, diagram of een andere complexe afbeelding',
          value: 'context-complex-image-help',
        },
        {
          id: 'context-simple-image',
          label: 'Het is een foto of een eenvoudige illustratie',
          value: 'context-simple-image-help',
        },
      ]}
    />
  );
}
