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
} from '@utrecht/component-library-react/dist/css-module';
import { SpotlightSection } from '@utrecht/component-library-react';

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
        <PreHeading>Stap 2 van 5</PreHeading>
        <Fieldset
          id="context-type-group"
          aria-describedby="image-type-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Wat voor soort afbeelding is het?</FieldsetLegend>
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
                value="image-complex"
                defaultChecked={selectedOption === 'image-complex'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  onChangeOption('type', 'complex');
                }}
              />
              <div>
                <span className="bold-text">Het is een grafiek, diagram of een andere complexe afbeelding.</span>
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
                value="image-simple"
                defaultChecked={selectedOption === 'image-simple'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  onChangeOption('type', 'simple');
                }}
              />
              <div>
                <span className="bold-text">Het is een foto of een eenvoudige illustratie.</span>
              </div>
            </FormLabel>
          </FormField>

          <SpotlightSection>
            <Heading3>Complexe afbeelding</Heading3>
            <Paragraph>Een afbeelding met veel informatie wordt ook wel een complexe afbeelding genoemd.</Paragraph>
            <Heading4>Voorbeelden van complexe afbeeldingen</Heading4>
            <ul>
              <li>Grafiek</li>
              <li>Geografische kaart</li>
              <li>Schema</li>
              <li>Stappenplan</li>
            </ul>
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
              Volgende stap
            </Button>
          </div>
        </Fieldset>
      </>
    );
  }
}
