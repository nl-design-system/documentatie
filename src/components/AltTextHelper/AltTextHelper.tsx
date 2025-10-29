import { useState } from 'react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import HelperText from './HelperText';
import ImageTypeHelper from './ImageTypeHelper';
import TextTypeHelper from './TexTypeHelper';
import ContextTypeHelper from './ContextTypeHelper';
import './AltTextHelper.css';

const AltTextHelper = () => {
  const [helpStep] = useState('');

  const [currentChecked, setCurrentChecked] = useState({ image: '', context: '', text: '', group: '' });
  const [currentStep] = useState('image-type');
  const [history] = useState(['image-type']);

  const next = () => {
    console.log(history);
    // setPreviousStep(currentStep);

    // switch (currentChecked.active) {
    //   case 'image-type-text-help':
    //     setCurrentStep('text-type');
    //     break;

    //   case 'image-type-context-help':
    //     setCurrentStep('context-type');
    //     break;

    //   default:
    //     setCurrentStep('help-text');
    //     setHelpStep(currentChecked.active);
    // }
    // setCurrentChecked({
    //   ...currentChecked,
    //   active: ''
    // });
  };

  const prev = () => {
    console.log(history);
    // if(currentStep === 'text-type' || currentStep === 'context-type') {
    //   setCurrentStep('image-type');
    // }
    // else setCurrentStep(previousStep);

    // setHelpStep('');
  };

  const onOptionChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'text-type':
        setCurrentChecked({
          ...currentChecked,
          text: value,
          group: name,
        });
        break;
      case 'context-type':
        setCurrentChecked({
          ...currentChecked,
          context: value,
          group: name,
        });
        break;
      case 'image-type':
        setCurrentChecked({
          ...currentChecked,
          image: value,
          group: name,
        });
    }
  };

  return (
    <form className="nlds-alt-text-helper">
      {currentStep === 'image-type' && (
        <ImageTypeHelper onOptionChange={onOptionChange} checked={currentChecked.image} />
      )}

      {currentStep === 'text-type' && <TextTypeHelper onOptionChange={onOptionChange} checked={currentChecked.text} />}

      {currentStep === 'context-type' && (
        <ContextTypeHelper onOptionChange={onOptionChange} checked={currentChecked.context} />
      )}

      {helpStep !== '' && <HelperText id={helpStep} />}

      <div className="button-bar">
        {currentStep !== 'image-type' && (
          <Button appearance="secondary-action-button" onClick={prev}>
            Vorige
          </Button>
        )}

        {currentStep !== 'help-text' && (
          <Button appearance="primary-action-button" onClick={next}>
            Volgende
          </Button>
        )}
      </div>
    </form>
  );
};

export default AltTextHelper;
