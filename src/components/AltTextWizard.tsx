import { lazy, Suspense, useState } from 'react';
import { BrowserOnly } from './BrowserOnly';

const WizardLoader = lazy(async () => {
  await import('@nl-design-system-community/clippy-alt-text-wizard');
  await import('@nl-design-system-candidate/button-css/button.css');

  return {
    default: () => {
      // @ts-expect-error -- clippy-alt-text-wizard is a Lit web component, not a React component
      return <clippy-alt-text-wizard />;
    },
  };
});

export const AltTextWizard = () => {
  const [started, setStarted] = useState(false);

  return (
    <BrowserOnly>
      {() =>
        started ? (
          <Suspense fallback="Alt-tekst keuzehulp laden...">
            <WizardLoader />
          </Suspense>
        ) : (
          <button className="nl-button nl-button--primary" type="button" onClick={() => setStarted(true)}>
            Start de alt-tekst keuzehulp
          </button>
        )
      }
    </BrowserOnly>
  );
};
