module.exports = {
  extends: ['plugin:jsx-a11y/recommended'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // deprecated rule
    'jsx-a11y/no-onchange': 0,
  },
};
