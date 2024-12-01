import { Document } from '@utrecht/component-library-react/dist/css-module';
import type { PropsWithChildren } from 'react';
import '@nl-design-system-unstable/nlds-design-tokens/src/font.mjs';

// Default implementation, that you can customize
function Root({ children }: PropsWithChildren<object>) {
  return <Document className="nlds-theme main-layout">{children}</Document>;
}

export default Root;
