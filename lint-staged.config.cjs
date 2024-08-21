module.exports = {
  // Automatically add Prettier fixes to the commit as long as there are no errors
  '*': ['prettier --ignore-unknown --write'],
  '*.{js,cjs,mjs,jsx,ts,tsx,mdx}': ['eslint --no-error-on-unmatched-pattern'],
  'package.json': ['npmPkgJsonLint --allowEmptyTargets'],
};
