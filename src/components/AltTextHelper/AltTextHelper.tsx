import { useState } from 'react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import HelperText from './HelperText';
import ImageTypeHelper from './ImageTypeHelper';
import TextTypeHelper from './TexTypeHelper';
import ContextTypeHelper from './ContextTypeHelper';
import './AltTextHelper.css';

const maxSteps = 3;

const AltTextHelper = () => {
  const [helperTextId, setHelperTextId] = useState('');
  const [imageTypeText, setImageTypeText] = useState(false);
  const [imageTypeContext, setImageTypeContext] = useState(false);
  const [currentStep, setcurrentStep] = useState(1);

  const addStep = () => {
    if (currentStep < maxSteps) setcurrentStep(currentStep + 1);
  };

  const subtractStep = () => {
    if (currentStep > 1) setcurrentStep(currentStep - 1);
  };

  const onOptionChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'context-type':
        setImageTypeText(false);
        setHelperTextId(value);
        break;

      case 'text-type':
        setImageTypeContext(false);
        setHelperTextId(value);
        break;

      default:
        setHelperTextId('');
        setImageTypeText(false);
        setImageTypeContext(false);

        switch (value) {
          case 'image-type-text-help':
            setImageTypeText(true);
            break;

          case 'image-type-context-help':
            setImageTypeContext(true);
            break;

          default:
            setHelperTextId(value);
        }
    }
  };

  return (
    <form className="nlds-alt-text-helper">
      <p className="utrecht-pre-heading">
        Stap {currentStep} van {maxSteps}
      </p>

      <ImageTypeHelper onOptionChange={onOptionChange} />

      {imageTypeText && <TextTypeHelper onOptionChange={onOptionChange} />}

      {imageTypeContext && <ContextTypeHelper onOptionChange={onOptionChange} />}

      <HelperText helperTextId={helperTextId} />

      <div className="button-bar">
        <Button appearance="secondary-action-button" disabled={currentStep === 1 ? true : false} onClick={subtractStep}>
          Vorige
        </Button>

        <Button appearance="primary-action-button" disabled={currentStep === maxSteps ? true : false} onClick={addStep}>
          Volgende
        </Button>
      </div>
    </form>
  );
};

export default AltTextHelper;
