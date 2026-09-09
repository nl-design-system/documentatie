import { Note } from '@utrecht/note-react';
import { SpotlightSection as UtrechtSpotlightSection } from '@utrecht/component-library-react';
import '@utrecht/spotlight-section-css/dist/index.css';
import '@utrecht/note-css/dist/index.css';

export const SpotlightSection = globalThis.isAstro ? Note : UtrechtSpotlightSection;
