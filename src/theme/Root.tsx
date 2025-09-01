import { Document } from '@utrecht/component-library-react/dist/css-module';
import type { PropsWithChildren } from 'react';
import '@nl-design-system-unstable/nlds-design-tokens/src/font.mjs';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/custom.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';
import '@nl-design-system-community/ma-design-tokens/dist/theme.css';

// Default implementation, that you can customize
function Root({ children }: PropsWithChildren<object>) {
  return <Document className="nlds-theme main-layout">{children}</Document>;
}

export default Root;
