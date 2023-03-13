import React from 'react';
import '@nl-design-system-unstable/nlds-design-tokens/src/font';

// Package with CSS for white-label components
import '@utrecht/component-library-css';
import { Document } from '@utrecht/component-library-react';

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <Document className="nlds-theme" lang="nl">
      {children}
    </Document>
  );
}

export default Root;
