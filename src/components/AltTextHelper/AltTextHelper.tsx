import { useState } from 'react';
import ImageTypeHelper from './ImageTypeHelper';
import ContextTypeHelper from './ContextTypeHelper';
import TextTypeHelper from './TexTypeHelper';
import ExtraChecks from './ExtraChecks';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import './AltTextHelper.css';
import HelperText from './HelperText';

const groupName = 'start';

const AltTextHelper = () => {
  const [image, setImage] = useState({
    type: '',
    clickable: false,
    descripted: false,
    text: false,
    content: '',
  });

  const changeProperty = (name, val) => {
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

    switch (prev) {
      case 'image-type':
        if (image.type === 'decorative' || image.type === 'functional') current = 'extra-checks';
        else current = 'context-type';
        break;
      case 'context-type':
        current = 'extra-checks';
        break;
      case 'extra-checks':
        current = image.text ? 'text-type' : 'helper-text';
        break;
      case 'text-type':
        current = 'helper-text';
        break;
      default:
        current = 'image-type';
    }
    return current;
  };

  const stepBack = () => {
    setSteps({
      current: steps.previous,
      previous: setPreviousStep(steps.previous),
    });
  };

  const setPreviousStep = (current) => {
    let previous = '';

    switch (current) {
      case 'text-type':
        previous = 'extra-checks';
        break;
      case 'helper-text':
        if (image.text) previous = 'text-type';
        else if (image.type !== 'decorative') previous = 'context-type';
        else previous = 'image-type';
        break;
      default:
        previous = 'image-type';
    }

    return previous;
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
      <ExtraChecks {...helperProps} onPrevStep={stepBack} image={image} />
      <TextTypeHelper {...helperProps} onPrevStep={stepBack} />
      <HelperText onPrevStep={stepBack} active={steps.current} image={image} />
    </form>
  );
};

export default AltTextHelper;
