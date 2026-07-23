import * as designTokens from '@nl-design-system-community/ma-design-tokens/dist/variables.mjs';
import removeUnusedDesignTokens from '@nl-design-system-unstable/postcss-remove-unused-design-tokens';
import postcssGlobalData from '@csstools/postcss-global-data';
import customMedia from 'postcss-custom-media';

// Docusaurus should not use this file, but since it access a component within
// the `packages/website` folder, it tries to do so. This way Docusaurus can be
// detected and when the running process is _not_ Docusaurus, it loads the file
// Astro does not include any indication of itself into the environment, so
// thats why this method is being used.
const globalData = !process.env['DOCUSAURUS_CURRENT_LOCALE']
  ? postcssGlobalData({ files: ['./src/styles/custom-media-queries.css'] })
  : null;

export default {
  plugins: [globalData, removeUnusedDesignTokens({ designTokens }), customMedia()],
};
