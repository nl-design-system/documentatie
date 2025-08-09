import { Document } from '@utrecht/component-library-react/dist/css-module';
import type { PropsWithChildren } from 'react';
import '@nl-design-system-unstable/nlds-design-tokens/src/font.mjs';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/custom.css';
import '@nl-design-system-community/ma-design-tokens/dist/theme.css';

// Default implementation, that you can customize
function Root({ children }: PropsWithChildren<object>) {
  return <Document className="ma-theme main-layout">{children}</Document>;
}

export default Root;
