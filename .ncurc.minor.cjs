const patchConfig = require('./.ncurc.patch.cjs');

module.exports = {
  reject: [...patchConfig.reject],
};
