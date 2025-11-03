import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  FormLabel,
  RadioButton,
  Button,
} from '@utrecht/component-library-react/dist/css-module';

const groupName = 'image-type';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  changeOption;
  changeGroup;
  activeGroup: string;
}

export default function ImageTypeHelper({ changeOption, changeGroup, activeGroup }: ImageTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const nextStep = () => {
    if (selectedOption === 'text-type' || selectedOption === 'context-type') {
      changeOption('');
      changeGroup(selectedOption);
    } else {
      changeGroup('');
      changeOption(selectedOption);
    }
  };

  if (activeGroup === groupName) {
    return (
      <Fieldset
        id="image-type-group"
        aria-describedby="image-type-group-description"
        role="radiogroup"
        ref={autoFocus}
        tabIndex={-1}
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
              name={groupName}
              value="context-type"
              defaultChecked={selectedOption === 'context-type'}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
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
              name={groupName}
              value="image-type-decorative-help"
              defaultChecked={selectedOption === 'image-type-decorative-help'}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
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
              name={groupName}
              value="text-type"
              defaultChecked={selectedOption === 'text-type'}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
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
              name={groupName}
              value="image-type-functional-help"
              defaultChecked={selectedOption === 'image-type-functional-help'}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
            />
            <span>
              <strong>De afbeelding wordt gebruikt als een link of knop.</strong>
              <br />
              Dit heet een functionele afbeelding.
            </span>
          </FormLabel>
        </FormField>
        <div className="button-bar flex-end">
          <Button appearance="primary-action-button" disabled={selectedOption === '' ? true : false} onClick={nextStep}>
            Ga verder
          </Button>
        </div>
      </Fieldset>
    );
  }
}
