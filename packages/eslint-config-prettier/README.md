# @meludi/eslint-config-prettier

[![NPM Package][eslint-config-prettier-npm-badge]][eslint-config-prettier-npm-link]
[![GitHub issues][eslint-config-prettier-issues-badge]][eslint-config-prettier-issues-link]
[![GitHub license][eslint-config-license-badge]][eslint-config-license-link]

This package provides [Prettier](https://prettier.io) settings as an shareable configuration.

## Installation

Install the package with:

```sh
$ npm i -D @meludi/eslint-config-prettier

```

Find out and install `peerDependencies`.

```sh
$ npm info "@meludi/eslint-config-prettier@latest" peerDependencies
```

## Entry points

- @meludi/eslint-config-prettier
- @meludi/eslint-config-prettier/vue

## Usage

If you did not already have `.eslintrc.js` and `prettier.config.js` configuration files in the root of your project create them.

Add the following to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  extends: [
    // ... other configs

    // Make sure to put prettier last, so it gets the chance to override other configs.
    '@meludi/eslint-config-prettier',

    // Vue
    // '@meludi/eslint-config-prettier/vue',
  ],
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
  "format": "prettier --write './**/*.{js,jsx,ts,tsx,vue,md,mdx,json}'"
}
```

## Recommendation

Add the following config files to the root of your project:

- [.prettierignore](https://prettier.io/docs/en/ignore.html)
- [.editorconfig](https://editorconfig.org/)

### VS Code

Copy [.vscode.example](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-prettier/.vscode.example) to the root of your project and rename it to `.vscode`.

## LICENSE

[MIT](LICENSE)

[eslint-config-license-badge]: https://img.shields.io/github/license/meludi/eslint-config
[eslint-config-license-link]: https://github.com/meludi/eslint-config/blob/main/LICENSE
[eslint-config-prettier-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-prettier.svg
[eslint-config-prettier-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-prettier
[eslint-config-prettier-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-prettier?label=issues
[eslint-config-prettier-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-prettier%22
