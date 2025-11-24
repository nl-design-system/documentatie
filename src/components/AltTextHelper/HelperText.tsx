import { Heading2, Button } from '@utrecht/component-library-react/dist/css-module';

const groupName = 'helper-text';

const autoFocus = (element: HTMLElement | null) => element?.focus();

interface HelperTextProps {
  onPrevStep;
  active;
}

export default function HelperText({ onPrevStep, active }: HelperTextProps) {
  if (active === groupName) {
    return (
      <>
        <div className="nlds-helper-text" ref={autoFocus} tabIndex={-1}>
          <Heading2>Help</Heading2>
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
