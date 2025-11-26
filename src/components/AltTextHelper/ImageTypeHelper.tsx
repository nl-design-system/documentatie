import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  FormLabel,
  RadioButton,
  Button,
  Heading3,
  Heading4,
  Paragraph,
  PreHeading,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';

const groupName = 'image-type';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  onChangeOption;
  onNextStep;
  active;
}

export default function ImageTypeHelper({ onChangeOption, onNextStep, active }: ImageTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

  if (active === groupName) {
    return (
      <>
        <PreHeading>Stap 1 van 5</PreHeading>
        <Fieldset
          id="image-type-group"
          aria-describedby="image-type-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Wat is het doel van de afbeelding?</FieldsetLegend>
          <FormFieldDescription id="image-type-group-description">
            Soms doet een afbeelding meer dan één ding. Bijvoorbeeld: een kaart waarop je kunt klikken, of een
            illustratie die ook een link is. Kies het belangrijkste doel van de afbeelding:
          </FormFieldDescription>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-type-contextual"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-type-contextual"
                name={groupName}
                value="image-type-contextual"
                defaultChecked={selectedOption === 'image-type-contextual'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  onChangeOption('type', '');
                }}
              />
              <div>
                <span className="bold-text">De afbeelding helpt om de tekst op de pagina beter te begrijpen.</span>
                <br />
                Dit heet een informatieve afbeelding. Bijvoorbeeld een grafiek, een schema, een stappenplan, een
                geografische kaart of een illustratie.
              </div>
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
                value="image-type-decorative"
                defaultChecked={selectedOption === 'image-type-decorative'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  onChangeOption('type', 'decorative');
                }}
              />
              <div>
                <span className="bold-text">
                  De afbeelding is alleen toegevoegd om de pagina er mooier uit te laten zien.
                </span>
                <br />
                Dit heet een decoratieve afbeelding. Bijvoorbeeld een afbeelding in de achtergrond van een website, een
                icoon naast een tekst met dezelfde informatie of een sfeerbeeld zonder betekenis.
              </div>
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
                  onChangeOption('type', 'functional');
                }}
              />
              <div>
                <span className="bold-text">
                  De afbeelding wordt <em>alléén</em> gebruikt als een link of knop.
                </span>
                <br />
                Dit heet een functionele afbeelding.
              </div>
            </FormLabel>
          </FormField>
          <Heading3>Decoratieve afbeelding</Heading3>
          <Paragraph>
            Weet je niet zeker of de afbeelding echt decoratief is? Dit zijn vragen die je jezelf hierbij kunt stellen:
          </Paragraph>
          <UnorderedList>
            <UnorderedListItem>Waarom wil ik deze afbeelding plaatsen?</UnorderedListItem>
            <UnorderedListItem>Als ik de afbeelding weglaat, welke informatie gaat er dan verloren?</UnorderedListItem>
            <UnorderedListItem>
              Als ik deze afbeelding niét zou kunnen gebruiken, zou ik dan een vervangende afbeelding zoeken?
            </UnorderedListItem>
          </UnorderedList>
          <Heading4>Context is bepalend</Heading4>
          <Paragraph>
            De context bepaalt of een afbeelding decoratief of informatief is, en wat er precies in de alt-tekst moet
            staan. Bijvoorbeeld: Een afbeelding van een koe kan decoratief zijn bij een verhaal over het boerenleven,
            maar informatief in een artikel over verschillende koeienrassen.
          </Paragraph>
          <div className="nlds-button-bar flex-end">
            <Button
              appearance="primary-action-button"
              disabled={selectedOption === '' ? true : false}
              onClick={() => onNextStep(groupName)}
            >
              Volgende stap
            </Button>
          </div>
        </Fieldset>
      </>
    );
  }
}
