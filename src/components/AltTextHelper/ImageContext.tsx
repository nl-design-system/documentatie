import React, { createContext, useContext, useState } from 'react';

type ImageContextType = {
  image: object | null;
  setImage: React.Dispatch<React.SetStateAction<object | null>>;
};

export const ImageContext = createContext<ImageContextType>({} as ImageContextType);

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState({
    type: String,
    clickable: Boolean,
    descripted: Boolean,
    text: Boolean,
    content: String,
  });

  return <ImageContext.Provider value={{ image, setImage }}>{children}</ImageContext.Provider>;
};

export const useImageContext = () => useContext(ImageContext);
