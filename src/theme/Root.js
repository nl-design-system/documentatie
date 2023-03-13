import React from 'react';
import '@nl-design-system-unstable/nlds-design-tokens/src/font';

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <div className="nlds-theme" lang="nl">
      {children}
    </div>
  );
}

export default Root;
