import { Heading2, Button, Paragraph } from '@utrecht/component-library-react/dist/css-module';

const groupName = 'helper-text';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface HelperTextProps {
  onPrevStep;
  active;
  image;
}

export default function HelperText({ onPrevStep, active, image }: HelperTextProps) {
  // const renderHelpers = () => {
  //   return Object.entries(image).map(([key, value], i) => {
  //     return (
  //       <div>
  //         {key},{value}
  //       </div>
  //     )
  //   })
  // }

  // const imblaage = {
  //   decorative: false,
  //   complex: false,
  //   text: false,
  //   clickable: false,
  //   content: '',
  // };

  if (active === groupName) {
    return (
      <>
        <div className="nlds-helper-text" ref={autoFocus} tabIndex={-1}>
          <Heading2>Help</Heading2>
          <ImageDecorativeHelper show={image.decorative} />
          <ImageComplexHelper show={image.complex} />
          <ImageTextHelper show={image.text} content={image.content} />
          <ImageClickableHelper show={image.clickable} />
        </div>
        <div className="nlds-button-bar">
          <Button appearance="secondary-action-button" onClick={() => onPrevStep(groupName)}>
            Terug
          </Button>
        </div>
      </>
    );
  }
}

interface ImageDecorativeHelperProps {
  show;
}

export function ImageDecorativeHelper({ show }: ImageDecorativeHelperProps) {
  if (show) {
    return <Paragraph>Decoratief</Paragraph>;
  }
}

interface ImageComplexHelperProps {
  show;
}

export function ImageComplexHelper({ show }: ImageComplexHelperProps) {
  if (show) {
    return <Paragraph>Complex</Paragraph>;
  }
}

interface ImageTextHelperProps {
  show;
  content;
}

export function ImageTextHelper({ show, content }: ImageTextHelperProps) {
  if (show) {
    return (
      <>
        <Paragraph>Tekst</Paragraph>
        <Paragraph>{content}</Paragraph>
      </>
    );
  }
}

interface ImageClickableHelperProps {
  show;
}

export function ImageClickableHelper({ show }: ImageClickableHelperProps) {
  if (show) {
    return <Paragraph>Klikbaar</Paragraph>;
  }
}
