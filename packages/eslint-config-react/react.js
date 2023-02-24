require('./patch/modern-module-resolution');

module.exports = {
  extends: ['./rules/react'].map(require.resolve),
  rules: {},
};
