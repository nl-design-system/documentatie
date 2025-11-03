import { useState } from 'react';
import HelperText from './HelperText';
import ImageTypeHelper from './ImageTypeHelper';
import TextTypeHelper from './TexTypeHelper';
import ContextTypeHelper from './ContextTypeHelper';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import './AltTextHelper.css';

const AltTextHelper = () => {
  const [activeSelection, setActiveSelection] = useState('');
  const [activeGroup, setActiveGroup] = useState('start');

  const changeOption = (val: string) => {
    setActiveSelection(val);
  };

  const changeGroup = (val: string) => {
    setActiveGroup(val);
  };

  return (
    <form className="nlds-alt-text-helper">
      {activeGroup === 'start' && (
        <Button
          appearance="primary-action-button"
          onClick={() => {
            setActiveGroup('image-type');
          }}
        >
          Start de alt-tekst helper
        </Button>
      )}

      <ImageTypeHelper changeOption={changeOption} changeGroup={changeGroup} activeGroup={activeGroup} />

      <TextTypeHelper changeOption={changeOption} changeGroup={changeGroup} activeGroup={activeGroup} />

      <ContextTypeHelper changeOption={changeOption} changeGroup={changeGroup} activeGroup={activeGroup} />

      <HelperText id={activeSelection} changeOption={changeOption} changeGroup={changeGroup} />
    </form>
  );
};

export default AltTextHelper;
