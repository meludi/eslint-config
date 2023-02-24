require('./patch/modern-module-resolution');

module.exports = {
  extends: ['./rules/react-hooks'].map(require.resolve),
  rules: {},
};
