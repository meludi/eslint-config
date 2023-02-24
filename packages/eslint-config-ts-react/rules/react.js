module.exports = {
  overrides: [
    {
      files: ['**/*.tsx', '**/*.jsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};
