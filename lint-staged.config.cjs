module.exports = {
  // Automatically add Prettier fixes to the commit as long as there are no errors
  '*': ['prettier --ignore-unknown --write'],
  '*.{js,cjs,mjs,jsx,ts,tsx,mdx,astro}': ['eslint --no-error-on-unmatched-pattern --fix', 'prettier --write'],
  'package.json': ['npmPkgJsonLint --allowEmptyTargets'],
};
