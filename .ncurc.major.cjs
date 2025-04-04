const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    'eslint',
    'eslint-plugin-json',
    'style-dictionary',
    'react',
    'react-dom',
    '@types/react',
    '@types/react-dom',
    // we manually update @types/node whenever we start using a new LTS version of Node.js
    '@types/node',
  ],
  target: 'latest',
};
