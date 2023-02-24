require('./patch/modern-module-resolution');

module.exports = {
  extends: ['@meludi/eslint-config-react/a11y'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
};
