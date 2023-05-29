import React from 'react';
import '@nl-design-system-unstable/nlds-design-tokens/src/font';
import '@nl-design-system-unstable/example-theme/dist/design-tokens.css';
import '@nl-design-system-unstable/example-theme/dist/custom.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';

// Package with CSS for white-label components
import '@utrecht/component-library-css';
import { Document } from '@utrecht/component-library-react';

// Default implementation, that you can customize
function Root({ children }) {
  return <Document className="nlds-theme">{children}</Document>;
}

export default Root;
