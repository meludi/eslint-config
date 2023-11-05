# @meludi/eslint-config-ts-vue

[![NPM Package][eslint-config-ts-vue-npm-badge]][eslint-config-ts-vue-npm-link]
[![GitHub issues][eslint-config-ts-vue-issues-badge]][eslint-config-ts-vue-issues-link]
[![GitHub license][eslint-config-license-badge]][eslint-config-license-link]

This package provides [ESLint](https://eslint.org/) settings as an shareable vue typescript eslint configuration.

## Installation

Install the package with:

```sh
$ npm i -D @meludi/eslint-config-ts-vue

```

Find out and install `peerDependencies`.

```sh
$ npm info "@meludi/eslint-config-ts-vue@latest" peerDependencies
```

## Entry points

- @meludi/eslint-config-ts-vue/vue2
- @meludi/eslint-config-ts-vue/vue3

## Usage

If you did not already have `.eslintrc.js` configuration file in the root of your project create them.

Add the following to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@meludi/eslint-config-ts-vue/vue2', // or '@meludi/eslint-config-ts-vue/vue3'
  ],

  // Adjust it to your project
  // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  // Adjust it to your project
  // https://typescript-eslint.io/architecture/parser/
  parserOptions: {
   project: ['./tsconfig.json', './tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },

  // optional
  // https://www.npmjs.com/package/eslint-import-resolver-typescript
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
```

### NPM script

Add the following script to your `package.json` for easy usage:

```json
"scripts": {
  "lint:js": "eslint './**/*.{js,vue,ts}'",
  "lint:js:fix": "npm run lint:js -- --fix"
}
```

### Configuration

You can overwrite, extend and unset rules in your `.eslintrc.js`

> [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)


Example `tsconfig.eslint.json` configuration file in the root of your project

```json
{
  "include": [
    // add all files in which you see
    // the "parserOptions.project" error

    // Example
    // ".eslintrc.cjs",
    // "commitlint.config.cjs",
    // "prettier.config.cjs"
  ]
}
```

## Recommendation

Use prettier to format your files: [@meludi/eslint-config-prettier](https://www.npmjs.com/package/@meludi/eslint-config-prettier)

Add the following config files to the root of your project:

- [.eslintignore](https://eslint.org/docs/latest/use/configure/ignore)
- [.editorconfig](https://editorconfig.org/)

### VS Code

Copy [.vscode.example](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-vue/.vscode.example) to the root of your project and rename it to `.vscode`.

#### Volar configuration

[volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## LICENSE

[MIT](LICENSE)

[eslint-config-license-badge]: https://img.shields.io/github/license/meludi/eslint-config
[eslint-config-license-link]: https://github.com/meludi/eslint-config/blob/main/LICENSE
[eslint-config-ts-vue-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-ts-vue.svg
[eslint-config-ts-vue-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-ts-vue
[eslint-config-ts-vue-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-ts-vue?label=issues
[eslint-config-ts-vue-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-ts-vue%22
