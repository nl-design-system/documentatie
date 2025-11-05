import {
  Heading2,
  Heading3,
  Paragraph,
  SpotlightSection,
  Button,
} from '@utrecht/component-library-react/dist/css-module';
import { Texts } from './helper-text';

const currentHelperText = (id) => {
  const text = Texts.find((o) => o.id === id);
  return text;
};

const autoFocus = (element: HTMLElement | null) => element?.focus();

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
    const helper = currentHelperText(id);

    return (
      <>
        <SpotlightSection type="info" role="alert" ref={autoFocus} tabIndex={-1}>
          <Heading2>{helper.heading}</Heading2>
          <Paragraph dangerouslySetInnerHTML={{ __html: helper.paragraph }}></Paragraph>
          {helper.additionals && !!helper.additionals.length && <AdditionalHelpers helpers={helper.additionals} />}
        </SpotlightSection>

        <div className="button-bar">
          <Button appearance="secondary-action-button" onClick={prevStep}>
            Terug
          </Button>
        </div>
      </>
    );
  }
}

interface AdditionalHelpersProps {
  helpers;
}

export function AdditionalHelpers({ helpers }: AdditionalHelpersProps) {
  return helpers.map((helper) => {
    const item = currentHelperText(helper);

    return (
      <>
        <Heading3>{item.heading}</Heading3>
        <Paragraph dangerouslySetInnerHTML={{ __html: item.paragraph }}></Paragraph>
      </>
    );
  });
}
