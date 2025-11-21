import { useState } from 'react';
import ImageTypeHelper from './ImageTypeHelper';
import ContextTypeHelper from './ContextTypeHelper';
import TextTypeHelper from './TexTypeHelper';
import AdditionalChecks from './AdditionalChecks';
import './AltTextHelper.css';

const AltTextHelper = () => {
  const [image, setImage] = useState({
    decorative: false,
    complex: false,
    text: false,
    clickable: false,
    content: '',
  });

  const changeProperty = (name, val) => {
    setImage({
      ...image,
      [name]: val,
    });
    // console.log(image);
  };

  return (
    <form className="nlds-alt-text-helper">
      <ImageTypeHelper onChangeOption={changeProperty} />
      <ContextTypeHelper onChangeOption={changeProperty} />
      <AdditionalChecks onChangeOption={changeProperty} />
      <TextTypeHelper onChangeOption={changeProperty} />
    </form>
  );
};

export default AltTextHelper;
