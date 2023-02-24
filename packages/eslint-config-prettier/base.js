require('./patch/modern-module-resolution');

module.exports = {
  extends: ['./rules/base'].map(require.resolve),
  rules: {},
};
