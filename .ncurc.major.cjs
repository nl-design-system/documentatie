const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  reject: [...minorConfig.reject, 'prettier'],
};
