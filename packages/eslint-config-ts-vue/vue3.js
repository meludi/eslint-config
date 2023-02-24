require('./patch/modern-module-resolution');

module.exports = {
  extends: ['@meludi/eslint-config-vue/vue3', './base', './rules/vue3'].map(require.resolve),
  parser: require.resolve('vue-eslint-parser'),
  rules: {},
};
