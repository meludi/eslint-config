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

If you did not already have `.eslintrc.js` and `prettier.config.js` configuration files in the root of your project create them.

Add the following to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  root: true,

  extends: [
    '@meludi/eslint-config-vue/vue2', // or '@meludi/eslint-config-vue/vue3'

    // Make sure to put prettier last, so it gets the chance to override other configs.
    '@meludi/eslint-config-prettier/vue',
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

Add the following to your `prettier.config.js`:

```js
// prettier.config.js
module.exports = require('@meludi/eslint-config-prettier/prettier.config');
```

### NPM script

Add the following script to your `package.json` for easy usage:

```json
"scripts": {
  "lint:js": "eslint './**/*.{js,vue}'",
  "lint:js:fix": "npm run lint:js -- --fix",
  "format": "prettier --write './**/*.{js,vue,md,json}'"
}
```

### Configuration

You can overwrite, extend and unset rules in your `.eslintrc.js`

> [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

## Recommendation

Add the following config files to the root of your project:

- [.eslintignore](https://eslint.org/docs/latest/use/configure/ignore)
- [.prettierignore](https://prettier.io/docs/en/ignore.html)
- [.editorconfig](https://editorconfig.org/)

```sh
# .editorconfig: http://EditorConfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

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
