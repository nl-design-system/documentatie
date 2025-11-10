import {
  Heading2,
  Heading3,
  Paragraph,
  SpotlightSection,
  Button,
  UnorderedList,
  UnorderedListItem,
  PreHeading,
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
        <PreHeading>Stap 3 van 3</PreHeading>

        <SpotlightSection type="info" role="alert" ref={autoFocus} tabIndex={-1}>
          <Heading2>{helper.heading}</Heading2>
          <div dangerouslySetInnerHTML={{ __html: helper.content }}></div>
          {helper.additionals && !!helper.additionals.length && (
            <>
              <Heading3>Houd ook rekening met het volgende</Heading3>
              <UnorderedList>
                <AdditionalHelpers helpers={helper.additionals} />
              </UnorderedList>
            </>
          )}
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

export const AdditionalHelpers = ({ helpers }: AdditionalHelpersProps) =>
  helpers.map((helper, i) => {
    const text = currentHelperText(helper);

    return (
      <UnorderedListItem key={i}>
        <Paragraph>
          <span className="bold-text">{text.heading}</span>
          <br />
          {text.content}
        </Paragraph>
      </UnorderedListItem>
    );
  });
