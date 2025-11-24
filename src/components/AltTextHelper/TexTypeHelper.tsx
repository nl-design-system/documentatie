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
  Paragraph,
  SpotlightSection,
} from '@utrecht/component-library-react/dist/css-module';

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

  if (active === groupName) {
    return (
      <>
        <Fieldset
          id="text-type-group"
          aria-describedby="text-type-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Waarvoor is de tekst in de afbeelding bedoeld?</FieldsetLegend>
          <FormFieldDescription id="text-type-group-description">
            Kies de optie die het beste past:
          </FormFieldDescription>
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
                  setSelectedOption(e.target.value);
                  onChangeOption('content', e.target.value);
                }}
              />
              <div>
                <span className="bold-text">De tekst heeft een functionele rol.</span>
                <br />
                Bijvoorbeeld: een icoon met de letters PDF dat “Download PDF” of een uitroepteken dat “Let op” aanduidt.
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
                  setSelectedOption(e.target.value);
                  onChangeOption('content', e.target.value);
                }}
              />
              <div>
                <span className="bold-text">
                  De tekst is alleen voor het visuele effect en heeft geen inhoudelijke betekenis
                </span>
                <br />
                Bijvoorbeeld een watermerk, tekst in een screenshot, een afbeelding van een verpakking of een stapel
                boeken.
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
                  setSelectedOption(e.target.value);
                  onChangeOption('content', e.target.value);
                }}
              />
              <div>
                <span className="bold-text">Dezelfde tekst staat ook naast of vlak bij de afbeelding.</span>
              </div>
            </FormLabel>
          </FormField>

          <SpotlightSection>
            <Heading3>Wees voorzichtig met tekst in afbeeldingen</Heading3>
            <Paragraph>
              Tekst in een afbeelding wordt niet voorgelezen door een screenreader en kan niet worden aangepast aan de
              behoeften van de bezoeker. Bied daarom altijd een alternatief aan in gewone tekst.
            </Paragraph>
            <Paragraph>
              Soms is een afbeelding van tekst wél gerechtvaardigd, bijvoorbeeld bij een logo of wanneer de typografie
              onderdeel is van de boodschap.
            </Paragraph>
            <Paragraph>
              Lees meer over hoe je omgaat met tekst in afbeeldingen op de pagina{' '}
              <a href="/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/">Tekst in een afbeelding</a>.
            </Paragraph>
          </SpotlightSection>

          <div className="nlds-button-bar">
            <Button appearance="secondary-action-button" onClick={() => onPrevStep(groupName)}>
              Vorige stap
            </Button>

            <Button
              appearance="primary-action-button"
              disabled={selectedOption === '' ? true : false}
              onClick={() => onNextStep(groupName)}
            >
              Toon advies
            </Button>
          </div>
        </Fieldset>
      </>
    );
  }
}
