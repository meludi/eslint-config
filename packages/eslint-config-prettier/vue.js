require('./patch/modern-module-resolution');

module.exports = {
  extends: ['./rules/vue'].map(require.resolve),
  rules: {},
};
