# @meludi/eslint-config-vue

[![NPM Package][eslint-config-vue-npm-badge]][eslint-config-vue-npm-link]
[![GitHub issues][eslint-config-vue-issues-badge]][eslint-config-vue-issues-link]
[![GitHub license][eslint-config-license-badge]][eslint-config-license-link]

This package provides [ESLint](https://eslint.org/) settings as an shareable vue eslint configuration.

## Installation

Install the package with:

```sh
$ npm i -D @meludi/eslint-config-vue

```

Find out and install `peerDependencies`.

```sh
$ npm info "@meludi/eslint-config-vue@latest" peerDependencies
```

## Entry points

- @meludi/eslint-config-vue/vue2
- @meludi/eslint-config-vue/vue3

## Usage

If you did not already have `.eslintrc.js` and configuration file in the root of your project create them.

Add the following to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  root: true,

  extends: [
    '@meludi/eslint-config-vue/vue2', // or '@meludi/eslint-config-vue/vue3'
  ],

  // Adjust it to your project
  // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  // optional
  // https://www.npmjs.com/package/eslint-import-resolver-custom-alias
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './src',
        },
      },
    },
  },
};
```

### NPM script

Add the following script to your `package.json` for easy usage:

```json
"scripts": {
  "lint:js": "eslint './**/*.{js,vue}'",
  "lint:js:fix": "npm run lint:js -- --fix"
}
```

### Configuration

You can overwrite, extend and unset rules in your `.eslintrc.js`

> [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

## Recommendation

Use prettier to format your files: [@meludi/eslint-config-prettier](https://www.npmjs.com/package/@meludi/eslint-config-prettier)

Add the following config files to the root of your project:

- [.eslintignore](https://eslint.org/docs/latest/use/configure/ignore)
- [.editorconfig](https://editorconfig.org/)

### VS Code

Copy [.vscode.example](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-vue/.vscode.example) to the root of your project and rename it to `.vscode`.

#### Volar configuration

[volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## LICENSE

[MIT](LICENSE)

[eslint-config-license-badge]: https://img.shields.io/github/license/meludi/eslint-config
[eslint-config-license-link]: https://github.com/meludi/eslint-config/blob/main/LICENSE
[eslint-config-vue-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-vue.svg
[eslint-config-vue-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-vue
[eslint-config-vue-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-vue?label=issues
[eslint-config-vue-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-vue%22
