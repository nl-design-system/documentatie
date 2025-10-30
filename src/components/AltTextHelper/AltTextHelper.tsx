import { useState } from 'react';
import HelperText from './HelperText';
import ImageTypeHelper from './ImageTypeHelper';
import TextTypeHelper from './TexTypeHelper';
import ContextTypeHelper from './ContextTypeHelper';
import './AltTextHelper.css';

const AltTextHelper = () => {
  const [activeSelection, setActiveSelection] = useState('');
  const [activeGroup, setActiveGroup] = useState('image-type');

  const onOptionChange = (val) => {
    setActiveSelection(val);
  };

  const onGroupChange = (val) => {
    setActiveGroup(val);
  };

  return (
    <form className="nlds-alt-text-helper">
      <ImageTypeHelper onOptionChange={onOptionChange} onGroupChange={onGroupChange} activeGroup={activeGroup} />

      <TextTypeHelper onOptionChange={onOptionChange} onGroupChange={onGroupChange} activeGroup={activeGroup} />

      <ContextTypeHelper onOptionChange={onOptionChange} onGroupChange={onGroupChange} activeGroup={activeGroup} />

      <HelperText id={activeSelection} />
    </form>
  );
};

export default AltTextHelper;
