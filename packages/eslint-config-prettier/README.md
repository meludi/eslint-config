# @meludi/eslint-config-prettier

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

- @meludi/eslint-config-prettier/base
- @meludi/eslint-config-prettier/vue

## Usage

If you did not already have `.eslint.js` and `prettier.config.js` configuration files in the root of your project create them.

Add the following to your `.eslint.js`:

```js
// .eslint.js
module.exports = {
  extends: [
    // ... other configs

    // Make sure to put prettier last, so it gets the chance to override other configs.
    '@meludi/eslint-config-prettier/base',
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
  "format": "prettier --write './**/*.{js,md,json}'"
}
```

## Recommendation

Add the following config files to the root of your project:

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

Copy [.vscode.example](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-prettier/.vscode.example) to the root of your project and rename it to `.vscode`.

## LICENSE

[MIT](LICENSE)
