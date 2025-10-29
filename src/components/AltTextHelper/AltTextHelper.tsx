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
  //const [steps] = useState({ current: '', previous: '', next: ''});
  const [checked] = useState({ image: '', context: '', text: '' });

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

  const initHelperText = (value) => {
    setHelperTextId(value);
    setNextStep('helper-text');
    checked.text = value;
  };

  const onOptionChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'text-type':
        setPreviousStep('text-type');
        initHelperText(value);
        break;
      case 'context-type':
        setPreviousStep('context-type');
        initHelperText(value);
        checked.context = value;
        break;
      case 'image-type':
        setHelperTextId('');
        checked.image = value;

        switch (value) {
          case 'image-type-text-help':
            setNextStep('text-type');
            break;

          case 'image-type-context-help':
            setNextStep('context-type');
            break;

          default:
            initHelperText(value);
        }
    }
  };

  return (
    <form className="nlds-alt-text-helper">
      {(currentStep === 'image-type' || currentStep === '') && (
        <ImageTypeHelper onOptionChange={onOptionChange} checked={checked.image} />
      )}

      {currentStep === 'text-type' && <TextTypeHelper onOptionChange={onOptionChange} checked={checked.text} />}

      {currentStep === 'context-type' && (
        <ContextTypeHelper onOptionChange={onOptionChange} checked={checked.context} />
      )}

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
