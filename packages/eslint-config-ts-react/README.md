# @meludi/eslint-config-ts-react

[![NPM Package][eslint-config-ts-react-npm-badge]][eslint-config-ts-react-npm-link]
[![GitHub issues][eslint-config-ts-react-issues-badge]][eslint-config-ts-react-issues-link]
[![GitHub license][eslint-config-license-badge]][eslint-config-license-link]

This package provides [ESLint](https://eslint.org/) settings as an shareable react typescript eslint configuration.

## Installation

Install the package with:

```sh
$ npm i -D @meludi/eslint-config-ts-react

```

Find out and install `peerDependencies`.

```sh
$ npm info "@meludi/eslint-config-ts-react@latest" peerDependencies
```

## Entry points

- @meludi/eslint-config-ts-react
- @meludi/eslint-config-ts-react/hooks
- @meludi/eslint-config-ts-react/a11y

## Usage

If you did not already have `.eslintrc.js` configuration file in the root of your project create them.

Add the following to your `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@meludi/eslint-config-ts-react',

    // optional
    '@meludi/eslint-config-ts-react/hooks',
    '@meludi/eslint-config-ts-react/a11y',
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
  "lint:js": "eslint './**/*.{js,jsx,ts,tsx}'",
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

Copy [.vscode.example](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-react/.vscode.example) to the root of your project and rename it to `.vscode`.

## LICENSE

[MIT](LICENSE)

[eslint-config-license-badge]: https://img.shields.io/github/license/meludi/eslint-config
[eslint-config-license-link]: https://github.com/meludi/eslint-config/blob/main/LICENSE
[eslint-config-ts-react-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-ts-react.svg
[eslint-config-ts-react-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-ts-react
[eslint-config-ts-react-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-ts-react?label=issues
[eslint-config-ts-react-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-ts-react%22
