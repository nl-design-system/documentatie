import React from 'react';
import '@nl-design-system-unstable/nlds-design-tokens/src/font';

// Package with CSS for white-label components
import '@utrecht/component-library-css';

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <div className="nlds-theme utrecht-document" lang="nl">
      {children}
    </div>
  );
}

export default Root;
