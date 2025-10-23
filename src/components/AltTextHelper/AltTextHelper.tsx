import { useState } from 'react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import HelperText from './HelperText';
import ImageTypeHelper from './ImageTypeHelper';
import TextTypeHelper from './TexTypeHelper';
import ContextTypeHelper from './ContextTypeHelper';
import './AltTextHelper.css';

const AltTextHelper = () => {
  const [helperTextId, setHelperTextId] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const [previousStep, setPreviousStep] = useState('');
  const [nextStep, setNextStep] = useState('');

  const next = () => {
    setCurrentStep(nextStep);
  };

  const prev = () => {
    if (currentStep === 'text-type' || currentStep === 'context-type') {
      setPreviousStep('image-type');
      setCurrentStep('image-type');
    } else {
      setCurrentStep(previousStep);
    }
  };

  const onOptionChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'text-type':
        setHelperTextId(value);
        setPreviousStep('text-type');
        setNextStep('helper-text');
        break;
      case 'context-type':
        setHelperTextId(value);
        setPreviousStep('context-type');
        setNextStep('helper-text');
        break;
      case 'image-type':
        setHelperTextId('');

        switch (value) {
          case 'image-type-text-help':
            setNextStep('text-type');
            break;

          case 'image-type-context-help':
            setNextStep('context-type');
            break;

          default:
            setHelperTextId(value);
            setNextStep('helper-text');
        }
    }
  };

  return (
    <form className="nlds-alt-text-helper">
      {(currentStep === 'image-type' || currentStep === '') && <ImageTypeHelper onOptionChange={onOptionChange} />}

      {currentStep === 'text-type' && <TextTypeHelper onOptionChange={onOptionChange} />}

      {currentStep === 'context-type' && <ContextTypeHelper onOptionChange={onOptionChange} />}

      {currentStep === 'helper-text' && <HelperText helperTextId={helperTextId} />}

      <div className="button-bar">
        <Button
          appearance="secondary-action-button"
          disabled={currentStep === 'image-type' ? true : false}
          onClick={prev}
        >
          Vorige
        </Button>

        <Button
          appearance="primary-action-button"
          disabled={currentStep === 'helper-text' || nextStep === currentStep ? true : false}
          onClick={next}
        >
          Volgende
        </Button>
      </div>
    </form>
  );
};

export default AltTextHelper;
