require('./patch/modern-module-resolution');

module.exports = {
  extends: ['@meludi/eslint-config-react/hooks'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
};
