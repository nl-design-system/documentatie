import { useState } from 'react';
import {
  Fieldset,
  FieldsetLegend,
  FormFieldDescription,
  FormFieldCheckbox,
  Button,
  Link,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconChevronLeft } from '@utrecht/web-component-library-react';

const groupName = 'extra-checks';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface ImageTypeHelperProps {
  onChangeOption;
  onPrevStep;
  onNextStep;
  active;
  image;
}

export default function ExtraChecks({ onChangeOption, onPrevStep, onNextStep, active, image }: ImageTypeHelperProps) {
  const [checkedOptions, setCheckedOptions] = useState({
    text: false,
    clickable: false,
    descripted: false,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setCheckedOptions((values) => ({ ...values, [name]: value }));
    onChangeOption(name, value);
  };

  const onBeforeNext = () => {
    if (image.type === 'complex') {
      setCheckedOptions((values) => ({ ...values, ['text']: false }));
      onChangeOption('text', false);
    }
    if (image.type === 'functional') {
      setCheckedOptions((values) => ({ ...values, ['clickable']: false }));
      onChangeOption('clickable', false);
    }
    if (image.type !== 'simple') {
      setCheckedOptions((values) => ({ ...values, ['descripted']: false }));
      onChangeOption('descripted', false);
    }
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

        <Fieldset
          id="additional-checks-group"
          aria-describedby="additional-checks-group-description"
          role="radiogroup"
          ref={autoFocus}
          tabIndex={-1}
        >
          <FieldsetLegend>Welke kenmerken gelden voor deze afbeelding?</FieldsetLegend>
          <FormFieldDescription id="additional-checks-group-description">
            Selecteer alle kenmerken die van toepassing zijn:
          </FormFieldDescription>
          {image.type !== 'complex' && (
            <FormFieldCheckbox
              id="image-contains-text"
              label="De afbeelding bevat zichtbare tekt"
              name="text"
              defaultChecked={!!checkedOptions.text}
              onChange={handleChange}
            />
          )}
          {image.type !== 'functional' && (
            <FormFieldCheckbox
              id="image-is-clickable"
              label="De afbeelding is óók een link of knop"
              name="clickable"
              defaultChecked={!!checkedOptions.clickable}
              onChange={handleChange}
            />
          )}

          {image.type === 'simple' && (
            <FormFieldCheckbox
              id="image-description-nearby"
              label="De afbeelding wordt al beschreven in de tekst ernaast"
              name="descripted"
              defaultChecked={!!checkedOptions.descripted}
              onChange={handleChange}
            />
          )}
        </Fieldset>

        <div className="nlds-button-next">
          <Button
            appearance="primary-action-button"
            onClick={() => {
              onBeforeNext();
              onNextStep(groupName);
            }}
          >
            Volgende stap
          </Button>
        </div>
      </>
    );
  }
}
