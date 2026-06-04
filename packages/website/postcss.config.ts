import * as designTokens from '@nl-design-system-community/ma-design-tokens/dist/variables.mjs';
import removeUnusedDesignTokens from '@nl-design-system-unstable/postcss-remove-unused-design-tokens';

export default {
  plugins: [removeUnusedDesignTokens({ designTokens })],
};
