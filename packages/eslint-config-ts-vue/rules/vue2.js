module.exports = {
  extends: ['plugin:vue/vue-recommended'],

  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parserOptions: {
    parser: {
      js: 'espree',
      jsx: 'espree',

      ts: require.resolve('@typescript-eslint/parser'),
      tsx: require.resolve('@typescript-eslint/parser'),

      // Leave the template parser unspecified,
      // so that it could be determined by `<script lang="...">`
    },
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
};
