require('./packages/eslint-config-base/patch/modern-module-resolution');

module.exports = {
  extends: [
    '@meludi/eslint-config-base',

    // Make sure to put prettier last, so it gets the chance to override other configs.
    '@meludi/eslint-config-prettier',
  ],

  root: true,

  // Adjust it to your project
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
