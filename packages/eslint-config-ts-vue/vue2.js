require('./patch/modern-module-resolution');

module.exports = {
  extends: ['@meludi/eslint-config-vue/vue2', './base', './rules/vue2'].map(require.resolve),
  parser: require.resolve('vue-eslint-parser'),
  rules: {},
};
