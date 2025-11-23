import { useState } from 'react';
import ImageTypeHelper from './ImageTypeHelper';
import ContextTypeHelper from './ContextTypeHelper';
import TextTypeHelper from './TexTypeHelper';
import AdditionalChecks from './AdditionalChecks';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import './AltTextHelper.css';

const groupName = 'start';

const AltTextHelper = () => {
  const [image, setImage] = useState({
    decorative: false,
    complex: false,
    text: false,
    clickable: false,
    content: '',
  });

  const changeProperty = (name, val) => {
    console.log(name, val);
    setImage({
      ...image,
      [name]: val,
    });
  };

  const [steps, setSteps] = useState({
    current: groupName,
    previous: '',
  });

  const stepForward = (prev) => {
    setSteps({
      current: setCurrentStep(prev),
      previous: prev,
    });
  };

  const setCurrentStep = (prev) => {
    let current = '';

    console.log(prev, image);

    switch (prev) {
      case 'image-type':
        current = image.decorative ? 'extra-checks' : 'context-type';
        break;
      case 'context-type':
        current = 'extra-checks';
        break;
      case 'extra-checks':
        current = image.text ? 'text-type' : groupName;
        break;
      default:
        current = 'image-type';
    }

    return current;
  };

  const stepBack = (current) => {
    setSteps({
      current: steps.previous,
      previous: current === 'text-type' ? 'extra-checks' : 'image-type',
    });
  };

  const helperProps = { onChangeOption: changeProperty, onNextStep: stepForward, active: steps.current };

  return (
    <form className="nlds-alt-text-helper">
      {steps.current === groupName && (
        <Button
          appearance="primary-action-button"
          onClick={() => {
            stepForward(groupName);
          }}
        >
          Start de alt-tekst keuzehulp
        </Button>
      )}
      <ImageTypeHelper {...helperProps} />
      <ContextTypeHelper {...helperProps} onPrevStep={stepBack} />
      <AdditionalChecks {...helperProps} onPrevStep={stepBack} />
      <TextTypeHelper {...helperProps} onPrevStep={stepBack} />
    </form>
  );
};

export default AltTextHelper;
