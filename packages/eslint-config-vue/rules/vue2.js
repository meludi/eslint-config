module.exports = {
  extends: ['plugin:vue/recommended'],

  parserOptions: {
    parser: {
      js: 'espree',
      jsx: 'espree',
      // Leave the template parser unspecified,
      // so that it could be determined by `<script lang="...">`
    },
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
};
