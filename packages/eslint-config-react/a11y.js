require('./patch/modern-module-resolution');

module.exports = {
  extends: ['./rules/react-a11y'].map(require.resolve),
  rules: {},
};
