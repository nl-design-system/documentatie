import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormField,
  FormLabel,
  RadioButton,
  Button,
  Heading2,
  PreHeading,
  UnorderedList,
  UnorderedListItem,
  Link,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconChevronLeft } from '@utrecht/web-component-library-react';

const groupName = 'text-type';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  onChangeOption;
  onPrevStep;
  onNextStep;
  active;
}

export default function TextTypeHelper({ onChangeOption, onPrevStep, onNextStep, active }: ImageTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const selectRadio = (val) => {
    setSelectedOption(val);
    onChangeOption('content', val);
  };

  if (active === groupName) {
    return (
      <>
        <div className="nlds-button-previous">
          <UtrechtIconChevronLeft className="nlds-link-back" />
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPrevStep();
            }}
          >
            Vorige stap
          </Link>
        </div>

        <PreHeading>Stap 4 van 5</PreHeading>
        <Fieldset
          id="text-type-group"
          aria-describedby="text-type-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Wat is de rol van de tekst in de afbeelding?</FieldsetLegend>
          <FormFieldDescription id="text-type-group-description">
            Kies de optie die het beste past:
          </FormFieldDescription>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="text-only-image"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="text-only-image"
                name={groupName}
                value="text-only-image"
                defaultChecked={selectedOption === 'text-only-image'}
                onChange={(e) => {
                  selectRadio(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">
                  De tekst geeft informatie die belangrijk is voor de inhoud en staat nergens anders op de pagina.
                </span>
                <br />
                Bijvoorbeeld een afbeelding met een aanbieding, een zichtbare prijs bij een product, of een aankondiging
                van een evenement.
              </div>
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
                name={groupName}
                value="text-near-image"
                defaultChecked={selectedOption === 'text-near-image'}
                onChange={(e) => {
                  selectRadio(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">Exact dezelfde tekst staat al in de buurt van de afbeelding.</span>
              </div>
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
                name={groupName}
                value="text-has-function"
                defaultChecked={selectedOption === 'text-has-function'}
                onChange={(e) => {
                  selectRadio(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">De tekst heeft een functionele rol.</span>
                <br />
                Bijvoorbeeld een PDF-icoon (Download PDF), een i-icoon (Meer informatie) of een uitroepteken (Let op).
              </div>
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
                name={groupName}
                value="text-visual-effect"
                defaultChecked={selectedOption === 'text-visual-effect'}
                onChange={(e) => {
                  selectRadio(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">
                  De tekst is alleen bedoeld als visueel element en voegt geen belangrijke informatie toe.
                </span>
                <br />
                Bijvoorbeeld tekst in een screenshot of op een afbeelding van een verpakking of stapel boeken.
              </div>
            </FormLabel>
          </FormField>
        </Fieldset>

        <div className="nlds-button-next">
          <Button
            appearance="primary-action-button"
            disabled={selectedOption === '' ? true : false}
            onClick={() => onNextStep(groupName)}
          >
            Toon advies
          </Button>
        </div>

        <Heading2>Meer informatie over het gebruik van tekst in afbeeldingen</Heading2>
        <UnorderedList>
          <UnorderedListItem>
            <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">
              Wees voorzichtig met tekst in afbeeldingen
            </a>
          </UnorderedListItem>
          <UnorderedListItem>
            <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/#op-een-toegankelijke-manier-tekst-in-een-afbeelding-gebruiken">
              Op een toegankelijke manier tekst in een afbeelding gebruiken
            </a>
            .
          </UnorderedListItem>
        </UnorderedList>
      </>
    );
  }
}
