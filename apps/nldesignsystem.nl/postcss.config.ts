import postcssGlobalData from '@csstools/postcss-global-data';
import * as designTokens from '@nl-design-system-community/ma-design-tokens/dist/variables.mjs';
import removeUnusedDesignTokens from '@nl-design-system-unstable/postcss-remove-unused-design-tokens';
import customMedia from 'postcss-custom-media';

// Docusaurus should not use this file, but since it access a component within
// the `apps/nldesignsystem.nl` folder, it tries to do so. This way Docusaurus can be
// detected and when the running process is _not_ Docusaurus, it loads the file
// Astro does not include any indication of itself into the environment, so
// thats why this method is being used.
const globalData = !process.env['DOCUSAURUS_CURRENT_LOCALE']
  ? postcssGlobalData({ files: ['./src/styles/custom-media-queries.css'] })
  : null;

const {
  basisSpaceText2xl,
  basisSpaceText3xl,
  basisSpaceText4xl,
  basisSpaceTextLg,
  basisSpaceTextMd,
  basisSpaceTextSm,
  basisSpaceTextXl,
  basisTextFontSize2xl,
  basisTextFontSize3xl,
  basisTextFontSize4xl,
  basisTextFontSizeLg,
  basisTextFontSizeMd,
  basisTextFontSizeSm,
  basisTextFontSizeXl,
  basisTextLineHeight2xl,
  basisTextLineHeight3xl,
  basisTextLineHeight4xl,
  basisTextLineHeightLg,
  basisTextLineHeightMd,
  basisTextLineHeightSm,
  basisTextLineHeightXl,
} = designTokens;

const missingFluidTokens = {
  basisSpaceTextMax2xl: 'calc(1.2 * var(--basis-space-text-max-2xl))',
  basisSpaceTextMax3xl: 'calc(1.2 * var(--basis-space-text-max-3xl))',
  basisSpaceTextMax4xl: 'calc(1.2 * var(--basis-space-text-max-4xl))',
  basisSpaceTextMaxLg: 'calc(1.2 * var(--basis-space-text-max-lg))',
  basisSpaceTextMaxMd: 'calc(1.2 * var(--basis-space-text-max-md))',
  basisSpaceTextMaxSm: 'calc(1.2 * var(--basis-space-text-max-sm))',
  basisSpaceTextMaxXl: 'calc(1.2 * var(--basis-space-text-max-xl))',
  basisSpaceTextMin2xl: basisSpaceText2xl,
  basisSpaceTextMin3xl: basisSpaceText3xl,
  basisSpaceTextMin4xl: basisSpaceText4xl,
  basisSpaceTextMinLg: basisSpaceTextLg,
  basisSpaceTextMinMd: basisSpaceTextMd,
  basisSpaceTextMinSm: basisSpaceTextSm,
  basisSpaceTextMinXl: basisSpaceTextXl,
  basisTextFontSizeMax2xl: 'calc(1.2 * var(--basis-text-font-size-min-2xl))',
  basisTextFontSizeMax3xl: 'calc(1.2 * var(--basis-text-font-size-min-3xl))',
  basisTextFontSizeMax4xl: 'calc(1.2 * var(--basis-text-font-size-min-4xl))',
  basisTextFontSizeMaxLg: 'calc(1.2 * var(--basis-text-font-size-min-lg))',
  basisTextFontSizeMaxMd: 'calc(1.2 * var(--basis-text-font-size-min-md))',
  basisTextFontSizeMaxSm: 'calc(1.2 * var(--basis-text-font-size-min-sm))',
  basisTextFontSizeMaxXl: 'calc(1.2 * var(--basis-text-font-size-min-xl))',
  basisTextFontSizeMin2xl: basisTextFontSize2xl,
  basisTextFontSizeMin3xl: basisTextFontSize3xl,
  basisTextFontSizeMin4xl: basisTextFontSize4xl,
  basisTextFontSizeMinLg: basisTextFontSizeLg,
  basisTextFontSizeMinMd: basisTextFontSizeMd,
  basisTextFontSizeMinSm: basisTextFontSizeSm,
  basisTextFontSizeMinXl: basisTextFontSizeXl,
  basisTextLineHeightMax2xl: 'calc(1.2 * var(--basis-text-font-size-min-2xl))',
  basisTextLineHeightMax3xl: 'calc(1.2 * var(--basis-text-font-size-min-3xl))',
  basisTextLineHeightMax4xl: 'calc(1.2 * var(--basis-text-font-size-min-4xl))',
  basisTextLineHeightMaxLg: 'calc(1.2 * var(--basis-text-font-size-min-lg))',
  basisTextLineHeightMaxMd: 'calc(1.2 * var(--basis-text-font-size-min-md))',
  basisTextLineHeightMaxSm: 'calc(1.2 * var(--basis-text-font-size-min-sm))',
  basisTextLineHeightMaxXl: 'calc(1.2 * var(--basis-text-font-size-min-xl))',
  basisTextLineHeightMin2xl: basisTextLineHeight2xl,
  basisTextLineHeightMin3xl: basisTextLineHeight3xl,
  basisTextLineHeightMin4xl: basisTextLineHeight4xl,
  basisTextLineHeightMinLg: basisTextLineHeightLg,
  basisTextLineHeightMinMd: basisTextLineHeightMd,
  basisTextLineHeightMinSm: basisTextLineHeightSm,
  basisTextLineHeightMinXl: basisTextLineHeightXl,
};

export default {
  plugins: [
    globalData,

    // removeUnusedDesignTokens is now mis-used to inject the computed
    // `missingFluidTokens`. The original purpose (flattening the `designTokens`)
    // is no longer working and the full ma-design-tokens are loaded in document.astro
    removeUnusedDesignTokens({
      designTokens: {
        ...missingFluidTokens,
      },
    }) as unknown,
    customMedia(),
  ],
};
