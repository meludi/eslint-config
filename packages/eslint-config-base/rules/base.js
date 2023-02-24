module.exports = {
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],

  settings: {
    // settings for https://github.com/import-js/eslint-plugin-import
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },

  plugins: ['import'],

  rules: {
    // general ESLint rules
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'no-case-declarations': 'off',
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-underscore-dangle': 'off', // e.g. __DEV__
    'no-unused-expressions': [
      'error',
      {
        // allow short circuit evaluations in your expressions
        allowShortCircuit: true,
      },
    ],

    // rules for https://github.com/benmosher/eslint-plugin-import
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        // 'pathGroups': [
        //   {
        //     /**
        //      * This assumes, that the project is using local import aliases with
        //      * the following structure: `@/**` which resolves to e.g. `src/**`.
        //      */
        //     pattern: '@/**',
        //     group: 'external',
        //     position: 'after',
        //   },
        // {
        //   pattern: 'react**',
        //     group: 'builtin',
        //     position: 'before',
        // }
        // ],
        // pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
};
