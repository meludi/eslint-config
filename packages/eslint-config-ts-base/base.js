require('./patch/modern-module-resolution');

module.exports = {
  extends: ['@meludi/eslint-config-base/base', './rules/base'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
};
