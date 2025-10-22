import type { PropsWithChildren } from 'react';
import '@nl-design-system-unstable/nlds-design-tokens/src/font.mjs';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/custom.css';
import '@nl-design-system-community/ma-design-tokens/dist/variables.css';
import { PageLayout } from '@utrecht/page-layout-react/css';

import '@utrecht/root-css/dist/html/index.css';
import '@utrecht/document-css/dist/html/index.css';

// Default implementation, that you can customize
function Root({ children }: PropsWithChildren<object>) {
  return (
    <>
      <PageLayout className="ma-theme">{children}</PageLayout>
    </>
  );
}

export default Root;
