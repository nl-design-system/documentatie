import React from "react";
import "@fontsource/fira-sans";

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <div className="nlds-theme" lang="nl">
      {children}
    </div>
  );
}

export default Root;
