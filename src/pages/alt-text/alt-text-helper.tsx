import { useState } from 'react';
import { RadioGroup } from '@utrecht/radio-group-react';
import HelperText from './helper-text';

const AltTextHelper = () => {
  const [helperTextId, setHelperTextId] = useState('');
  const [imageTypeText, setImageTypeText] = useState(false);
  const [imageTypeContext, setImageTypeContext] = useState(false);

  const onOptionChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    if (name === 'context-type') {
      setImageTypeText(false);
      setHelperTextId(val);
    } else if (name === 'text-type') {
      setImageTypeContext(false);
      setHelperTextId(val);
    } else {
      setHelperTextId('');
      setImageTypeText(false);
      setImageTypeContext(false);
      if (val === 'image-type-text-help') {
        setImageTypeText(true);
      } else if (val === 'image-type-context-help') {
        setImageTypeContext(true);
      } else {
        setHelperTextId(val);
      }
    }
  };

  return (
    <>
      <RadioGroup
        description="Kies de optie die het beste past:"
        id="image-type-group"
        label="Wat is het doel van de afbeelding?"
        name="image-type"
        options={[
          {
            id: 'image-type-text',
            label: 'De afbeelding bevat zichtbare tekst',
            value: 'image-type-text-help',
          },
          {
            id: 'image-type-functional',
            label: 'De afbeelding is een link of knop',
            value: 'image-type-functional-help',
          },
          {
            id: 'image-type-context',
            label: 'De afbeelding ondersteunt de inhoud van de pagina',
            value: 'image-type-context-help',
          },
          {
            id: 'image-type-decorative',
            label: 'De afbeelding is alleen decoratief',
            value: 'image-type-decorative-help',
          },
        ]}
        onChange={onOptionChange}
      />

      {imageTypeText && (
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
          onChange={onOptionChange}
        />
      )}

      {imageTypeContext && (
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
          onChange={onOptionChange}
        />
      )}

      <HelperText id={helperTextId} />
    </>
  );
};

export default AltTextHelper;
