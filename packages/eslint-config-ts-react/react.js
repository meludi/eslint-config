require('./patch/modern-module-resolution');

module.exports = {
  extends: ['@meludi/eslint-config-react/react', './rules/react'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
};
