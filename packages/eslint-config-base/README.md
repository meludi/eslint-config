# @meludi/eslint-config-base

[![NPM Package][eslint-config-base-npm-badge]][eslint-config-base-npm-link]
[![GitHub issues][eslint-config-base-issues-badge]][eslint-config-base-issues-link]
[![GitHub license][eslint-config-license-badge]][eslint-config-license-link]

This package provides [ESLint](https://eslint.org/) settings as an shareable javascript eslint configuration.

## Installation

Install the package with:

```sh
$ npm i -D @meludi/eslint-config-base

```

Find out and install `peerDependencies`.

```sh
$ npm info "@meludi/eslint-config-base@latest" peerDependencies
```

## Entry points

- @meludi/eslint-config-base

## Usage

If you did not already have `.eslintrc.js` configuration file in the root of your project create it.

Add the following to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  root: true,

  extends: ['@meludi/eslint-config-base'],

  // Adjust it to your project
  // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: { ecmaVersion: 2020 },

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
  "lint:js": "eslint './**/*.{js}'",
  "lint:js:fix": "npm run lint:js -- --fix",
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

Copy [.vscode.example](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-base/.vscode.example) to the root of your project and rename it to `.vscode`.

## LICENSE

[MIT](LICENSE)

[eslint-config-license-badge]: https://img.shields.io/github/license/meludi/eslint-config
[eslint-config-license-link]: https://github.com/meludi/eslint-config/blob/main/LICENSE
[eslint-config-base-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-base.svg
[eslint-config-base-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-base
[eslint-config-base-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-base?label=issues
[eslint-config-base-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-base%22
