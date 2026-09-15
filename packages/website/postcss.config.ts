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

const {
  basisTextFontSizeSm,
  basisTextFontSizeMd,
  basisTextFontSizeLg,
  basisTextFontSizeXl,
  basisTextFontSize2xl,
  basisTextFontSize3xl,
  basisTextFontSize4xl,
  basisTextLineHeightSm,
  basisTextLineHeightMd,
  basisTextLineHeightLg,
  basisTextLineHeightXl,
  basisTextLineHeight2xl,
  basisTextLineHeight3xl,
  basisTextLineHeight4xl,
  basisSpaceTextSm,
  basisSpaceTextMd,
  basisSpaceTextLg,
  basisSpaceTextXl,
  basisSpaceText2xl,
  basisSpaceText3xl,
  basisSpaceText4xl,
} = designTokens;

const missingFluidTokens = {
  basisTextFontSizeMinSm: basisTextFontSizeSm,
  basisTextFontSizeMinMd: basisTextFontSizeMd,
  basisTextFontSizeMinLg: basisTextFontSizeLg,
  basisTextFontSizeMinXl: basisTextFontSizeXl,
  basisTextFontSizeMin2xl: basisTextFontSize2xl,
  basisTextFontSizeMin3xl: basisTextFontSize3xl,
  basisTextFontSizeMin4xl: basisTextFontSize4xl,
  basisTextLineHeightMinSm: basisTextLineHeightSm,
  basisTextLineHeightMinMd: basisTextLineHeightMd,
  basisTextLineHeightMinLg: basisTextLineHeightLg,
  basisTextLineHeightMinXl: basisTextLineHeightXl,
  basisTextLineHeightMin2xl: basisTextLineHeight2xl,
  basisTextLineHeightMin3xl: basisTextLineHeight3xl,
  basisTextLineHeightMin4xl: basisTextLineHeight4xl,
  basisTextFontSizeMaxSm: 'calc(1.2 * var(--basis-text-font-size-min-sm))',
  basisTextFontSizeMaxMd: 'calc(1.2 * var(--basis-text-font-size-min-md))',
  basisTextFontSizeMaxLg: 'calc(1.2 * var(--basis-text-font-size-min-lg))',
  basisTextFontSizeMaxXl: 'calc(1.2 * var(--basis-text-font-size-min-xl))',
  basisTextFontSizeMax2xl: 'calc(1.2 * var(--basis-text-font-size-min-2xl))',
  basisTextFontSizeMax3xl: 'calc(1.2 * var(--basis-text-font-size-min-3xl))',
  basisTextFontSizeMax4xl: 'calc(1.2 * var(--basis-text-font-size-min-4xl))',
  basisTextLineHeightMaxSm: 'calc(1.2 * var(--basis-text-font-size-min-sm))',
  basisTextLineHeightMaxMd: 'calc(1.2 * var(--basis-text-font-size-min-md))',
  basisTextLineHeightMaxLg: 'calc(1.2 * var(--basis-text-font-size-min-lg))',
  basisTextLineHeightMaxXl: 'calc(1.2 * var(--basis-text-font-size-min-xl))',
  basisTextLineHeightMax2xl: 'calc(1.2 * var(--basis-text-font-size-min-2xl))',
  basisTextLineHeightMax3xl: 'calc(1.2 * var(--basis-text-font-size-min-3xl))',
  basisTextLineHeightMax4xl: 'calc(1.2 * var(--basis-text-font-size-min-4xl))',
  basisSpaceTextMinSm: basisSpaceTextSm,
  basisSpaceTextMinMd: basisSpaceTextMd,
  basisSpaceTextMinLg: basisSpaceTextLg,
  basisSpaceTextMinXl: basisSpaceTextXl,
  basisSpaceTextMin2xl: basisSpaceText2xl,
  basisSpaceTextMin3xl: basisSpaceText3xl,
  basisSpaceTextMin4xl: basisSpaceText4xl,
  basisSpaceTextMaxSm: 'calc(1.2 * var(--basis-space-text-max-sm))',
  basisSpaceTextMaxMd: 'calc(1.2 * var(--basis-space-text-max-md))',
  basisSpaceTextMaxLg: 'calc(1.2 * var(--basis-space-text-max-lg))',
  basisSpaceTextMaxXl: 'calc(1.2 * var(--basis-space-text-max-xl))',
  basisSpaceTextMax2xl: 'calc(1.2 * var(--basis-space-text-max-2xl))',
  basisSpaceTextMax3xl: 'calc(1.2 * var(--basis-space-text-max-3xl))',
  basisSpaceTextMax4xl: 'calc(1.2 * var(--basis-space-text-max-4xl))',
};

export default {
  plugins: [
    globalData,
    removeUnusedDesignTokens({
      designTokens: {
        ...missingFluidTokens,
        // ...designTokens,
      },
      selector: '.ma-theme',
    }),
    customMedia(),
  ],
};
