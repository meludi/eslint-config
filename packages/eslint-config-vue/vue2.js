require('./patch/modern-module-resolution');

module.exports = {
  extends: ['./base', './rules/vue2'].map(require.resolve),
  parser: require.resolve('vue-eslint-parser'),
  rules: {},
};
