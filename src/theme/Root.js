import React from 'react'
import '@fontsource/fira-sans'

// Package with CSS for white-label components
import '@utrecht/component-library-css'

// Default implementation, that you can customize
function Root ({ children }) {
  return (
    <div className='nlds-theme' lang='nl'>
      {children}
    </div>
  )
}

export default Root
