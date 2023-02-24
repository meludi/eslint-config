require('./patch/modern-module-resolution');

module.exports = {
  extends: ['@meludi/eslint-config-ts-base/base'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
};
