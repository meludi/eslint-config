require('./patch/modern-module-resolution');

module.exports = {
  extends: ['./base', './rules/vue3'].map(require.resolve),
  parser: require.resolve('vue-eslint-parser'),
  rules: {},
};
