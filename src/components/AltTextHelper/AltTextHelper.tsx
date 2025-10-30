import { useState } from 'react';
import HelperText from './HelperText';
import ImageTypeHelper from './ImageTypeHelper';
import TextTypeHelper from './TexTypeHelper';
import ContextTypeHelper from './ContextTypeHelper';
import './AltTextHelper.css';

const AltTextHelper = () => {
  const [activeSelection, setActiveSelection] = useState('');
  const [activeGroup, setActiveGroup] = useState('image-type');

  const changeOption = (val) => {
    setActiveSelection(val);
  };

  const changeGroup = (val) => {
    setActiveGroup(val);
  };

  return (
    <form className="nlds-alt-text-helper">
      <ImageTypeHelper changeOption={changeOption} changeGroup={changeGroup} activeGroup={activeGroup} />

      <TextTypeHelper changeOption={changeOption} changeGroup={changeGroup} activeGroup={activeGroup} />

      <ContextTypeHelper changeOption={changeOption} changeGroup={changeGroup} activeGroup={activeGroup} />

      <HelperText id={activeSelection} changeOption={changeOption} changeGroup={changeGroup} />
    </form>
  );
};

export default AltTextHelper;
