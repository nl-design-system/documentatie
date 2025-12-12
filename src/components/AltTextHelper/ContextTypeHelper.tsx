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
  UnorderedList,
  UnorderedListItem,
  Link,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconChevronLeft } from '@utrecht/web-component-library-react';

const groupName = 'context-type';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  onChangeOption;
  onPrevStep;
  onNextStep;
  active;
}

export default function ContextTypeHelper({ onChangeOption, onPrevStep, onNextStep, active }: ImageTypeHelperProps) {
  const [selectedOption, setSelectedOption] = useState('');

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
        <Fieldset
          id="context-type-group"
          aria-describedby="image-type-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Hoe ziet de afbeelding eruit?</FieldsetLegend>
          <FormFieldDescription id="context-type-group-description">
            Kies de optie die het beste past:
          </FormFieldDescription>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-complex"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-complex"
                name={groupName}
                value="complex"
                defaultChecked={selectedOption === 'complex'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">Het is een complexe afbeelding</span>
                <br />
                Bijvoorbeeld een grafiek, diagram, stappenplan, kaart, tijdlijn, infographic of een afbeelding met veel
                tekst.
              </div>
            </FormLabel>
          </FormField>
          <FormField type="radio">
            <FormLabel
              className="utrecht-form-field__label utrecht-form-field__label--radio"
              htmlFor="image-simple"
              type="radio"
            >
              <RadioButton
                className="utrecht-form-field__input"
                id="image-simple"
                name={groupName}
                value="simple"
                defaultChecked={selectedOption === 'simple'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <div>
                <span className="bold-text">Het is een foto of eenvoudige illustratie</span>
                <br />
                Bijvoorbeeld een portretfoto, sfeerbeeld, logo, simpele tekening of een afbeelding van een kleine
                hoeveelheid tekst.
              </div>
            </FormLabel>
          </FormField>
        </Fieldset>

        <div className="nlds-button-next">
          <Button
            appearance="primary-action-button"
            disabled={selectedOption === '' ? true : false}
            onClick={() => {
              onChangeOption('type', selectedOption);
              onNextStep(groupName);
            }}
          >
            Volgende stap
          </Button>
        </div>

        <Heading2>Meer informatie over afbeeldingen die helpen om de tekst op de pagina beter te begrijpen</Heading2>
        <UnorderedList>
          <UnorderedListItem>
            <a href="/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/">
              Uitgebreide uitleg over informatieve afbeeldingen
            </a>
            .
          </UnorderedListItem>
          <UnorderedListItem>
            <a href="/richtlijnen/content/afbeeldingen/alt-plaats/#een-tekst-in-de-buurt-van-de-afbeelding">
              Hoe beschrijf je een complexe afbeelding?
            </a>
          </UnorderedListItem>
          <UnorderedListItem>
            <a href="/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/#logo-als-link-naar-de-homepage">
              Hoe maak je een grafieken toegankelijker?
            </a>
          </UnorderedListItem>
        </UnorderedList>
      </>
    );
  }
}
