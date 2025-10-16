import { Heading2, Paragraph, SpotlightSection } from '@utrecht/component-library-react/dist/css-module';
import { Texts } from './helper-text';

const currentHelperText = (id) => {
  const text = Texts.find((o) => o.id === id);

  return text;
};

interface HelperTextProps {
  helperTextId: string;
}

export default function HelperText({ helperTextId }: HelperTextProps) {
  console.log(helperTextId);

  if (currentHelperText(helperTextId)) {
    return (
      <SpotlightSection type="info" role="alert">
        <Heading2>{currentHelperText(helperTextId).heading}</Heading2>
        <Paragraph dangerouslySetInnerHTML={{ __html: currentHelperText(helperTextId).paragraph }}></Paragraph>
      </SpotlightSection>
    );
  }
}
