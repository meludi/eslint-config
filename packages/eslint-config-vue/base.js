require('./patch/modern-module-resolution');

module.exports = {
  extends: ['@meludi/eslint-config-base/base'].map(require.resolve),
  parser: require.resolve('vue-eslint-parser'),
  rules: {},
};
