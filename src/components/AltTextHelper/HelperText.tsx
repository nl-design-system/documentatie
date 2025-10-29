import { Heading2, Paragraph, SpotlightSection } from '@utrecht/component-library-react/dist/css-module';
import { Texts } from './helper-text';

const currentHelperText = (id) => {
  const text = Texts.find((o) => o.id === id);

  return text;
};

interface HelperTextProps {
  id: string;
}

export default function HelperText({ id }: HelperTextProps) {
  if (currentHelperText(id)) {
    return (
      <SpotlightSection type="info" role="alert">
        <Heading2>{currentHelperText(id).heading}</Heading2>
        <Paragraph dangerouslySetInnerHTML={{ __html: currentHelperText(id).paragraph }}></Paragraph>
      </SpotlightSection>
    );
  }
}
