# @meludi/eslint-config-react

[![NPM Package][eslint-config-react-npm-badge]][eslint-config-react-npm-link]
[![GitHub issues][eslint-config-react-issues-badge]][eslint-config-react-issues-link]
[![GitHub license][eslint-config-license-badge]][eslint-config-license-link]

This package provides [ESLint](https://eslint.org/) settings as an shareable react eslint configuration.

## Installation

Install the package with:

```sh
$ npm i -D @meludi/eslint-config-react

```

Find out and install `peerDependencies`.

```sh
$ npm info "@meludi/eslint-config-react@latest" peerDependencies
```

## Entry points

- @meludi/eslint-config-react
- @meludi/eslint-config-react/hooks
- @meludi/eslint-config-react/a11y

## Usage

If you did not already have `.eslintrc.js` and `prettier.config.js` configuration files in the root of your project create them.

Add the following to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  root: true,

  extends: [
    '@meludi/eslint-config-react',

    // optional
    '@meludi/eslint-config-react/hooks',
    '@meludi/eslint-config-react/a11y',

    // Make sure to put prettier last, so it gets the chance to override other configs.
    '@meludi/eslint-config-prettier/base',
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
  "lint:js": "eslint './**/*.{js,jsx}'",
  "lint:js:fix": "npm run lint:js -- --fix",
  "format": "prettier --write './**/*.{js,jsx,md,json}'"
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

Copy [.vscode.example](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-react/.vscode.example) to the root of your project and rename it to `.vscode`.

## LICENSE

[MIT](LICENSE)

[eslint-config-license-badge]: https://img.shields.io/github/license/meludi/eslint-config
[eslint-config-license-link]: https://github.com/meludi/eslint-config/blob/main/LICENSE
[eslint-config-react-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-react.svg
[eslint-config-react-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-react
[eslint-config-react-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-react?label=issues
[eslint-config-react-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-react%22
