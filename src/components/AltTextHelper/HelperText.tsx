import { Heading2, Paragraph, SpotlightSection, Button } from '@utrecht/component-library-react/dist/css-module';
import { Texts } from './helper-text';

const currentHelperText = (id) => {
  const text = Texts.find((o) => o.id === id);
  return text;
};

interface HelperTextProps {
  id: string;
  changeOption;
  changeGroup;
}

export default function HelperText({ id, changeOption, changeGroup }: HelperTextProps) {
  const prevStep = () => {
    changeOption('');
    changeGroup(currentHelperText(id).group);
  };

  if (currentHelperText(id)) {
    return (
      <>
        <SpotlightSection type="info" role="alert">
          <Heading2>{currentHelperText(id).heading}</Heading2>
          <Paragraph dangerouslySetInnerHTML={{ __html: currentHelperText(id).paragraph }}></Paragraph>
        </SpotlightSection>

        <div className="button-bar">
          <Button appearance="secondary-action-button" onClick={prevStep}>
            Vorige
          </Button>
        </div>
      </>
    );
  }
}
