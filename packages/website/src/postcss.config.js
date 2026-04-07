import removeUnusedDesignTokens from '@nl-design-system-unstable/postcss-remove-unused-design-tokens';

export default {
  plugins: [removeUnusedDesignTokens()],
};
