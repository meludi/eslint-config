module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },

  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },

  plugins: ['@typescript-eslint'],

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        // general ESLint rules
        'no-return-await': ['off'],

        // @typescript-eslint rules
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
        // '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-namespace': 'off',
        // '@typescript-eslint/return-await': 'error',
      },
    },
  ],
};
