module.exports = {
  extends: ['plugin:react/recommended'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: [],
  },

  plugins: ['react'],

  rules: {
    // https://www.npmjs.com/package/eslint-plugin-react
    'react/react-in-jsx-scope': 'off',
    // use "" when passing a string as a property
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    // jsx is also allowed in non .jsx files
    'react/jsx-filename-extension': 'off',
    // Allowed but we should be aware to not overuse this.
    'react/jsx-props-no-spreading': 'off',
    // Enforce component methods order
    'react/sort-comp': 'error',
    // Enforce a specific function type for function components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
  },
};
