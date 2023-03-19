# @meludi/eslint-config

[![GitHub issues][eslint-config-issues-badge]][eslint-config-issues-link]
[![GitHub license][eslint-config-license-badge]][eslint-config-license-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]

Shareable eslint configuration.

## Packages

This repository is a monorepo using [Lerna](https://github.com/lerna/lerna). It is mainly based on [eslint](https://eslint.io/) and follows [semantic versioning](https://www.conventionalcommits.org/en/v1.0.0/).

We actually publish [several packages](/packages) to npm from the same codebase, including:

| Package                                                          | NPM                                                                                 | Docs                                              | Issues                                                                                      | Description                      |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------- |
| [@meludi/eslint-config-prettier][eslint-config-prettier-package] | [![NPM Package][eslint-config-prettier-npm-badge]][eslint-config-prettier-npm-link] | [![][doc-badge]][eslint-config-prettier-doc-link] | [![GitHub issues][eslint-config-prettier-issues-badge]][eslint-config-prettier-issues-link] | Format your code.                |
| [@meludi/eslint-config-base][eslint-config-base-package]         | [![NPM Package][eslint-config-base-npm-badge]][eslint-config-base-npm-link]         | [![][doc-badge]][eslint-config-base-doc-link]     | [![GitHub issues][eslint-config-base-issues-badge]][eslint-config-base-issues-link]         | Format your code.                |
| [@meludi/eslint-config-react][eslint-config-react-package]       | [![NPM Package][eslint-config-react-npm-badge]][eslint-config-react-npm-link]       | [![][doc-badge]][eslint-config-react-doc-link]    | [![GitHub issues][eslint-config-react-issues-badge]][eslint-config-react-issues-link]       | Format and lint your react code. |
| [@meludi/eslint-config-vue][eslint-config-vue-package]           | [![NPM Package][eslint-config-vue-npm-badge]][eslint-config-vue-npm-link]           | [![][doc-badge]][eslint-config-vue-doc-link]      | [![GitHub issues][eslint-config-vue-issues-badge]][eslint-config-vue-issues-link]           | Format and lint your react code. |
| [@meludi/eslint-config-ts-base][eslint-config-ts-base-package]   | [![NPM Package][eslint-config-ts-base-npm-badge]][eslint-config-ts-base-npm-link]   | [![][doc-badge]][eslint-config-ts-base-doc-link]  | [![GitHub issues][eslint-config-ts-base-issues-badge]][eslint-config-ts-base-issues-link]   | Format and lint your react code. |
| [@meludi/eslint-config-ts-react][eslint-config-ts-react-package] | [![NPM Package][eslint-config-ts-react-npm-badge]][eslint-config-ts-react-npm-link] | [![][doc-badge]][eslint-config-ts-react-doc-link] | [![GitHub issues][eslint-config-ts-react-issues-badge]][eslint-config-ts-react-issues-link] | Format and lint your react code. |
| [@meludi/eslint-config-ts-vue][eslint-config-ts-vue-package]     | [![NPM Package][eslint-config-ts-vue-npm-badge]][eslint-config-ts-vue-npm-link]     | [![][doc-badge]][eslint-config-ts-vue-doc-link]   | [![GitHub issues][eslint-config-ts-vue-issues-badge]][eslint-config-ts-vue-issues-link]     | Format and lint your react code. |

## Development
### Versioning and publishing
```sh
# Login to npm registry with your credentials
# This operation requires a one-time password
$ npm login

# Versioning
# Remember to push new version tags and main to the repo!
$ pnpm lerna:version

# Publishing
# This operation requires a one-time password
$ pnpm lerna:publish
```

## LICENSE

[MIT](LICENSE)

[doc-badge]: https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-link]: http://commitizen.github.io/cz-cli/
[eslint-config-issues-badge]: https://img.shields.io/github/issues/meludi/eslint-config
[eslint-config-issues-link]: https://github.com/meludi/eslint-config/issues
[eslint-config-license-badge]: https://img.shields.io/github/license/meludi/eslint-config
[eslint-config-license-link]: https://github.com/meludi/eslint-config/blob/main/LICENSE
[eslint-config-prettier-package]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-prettier
[eslint-config-prettier-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-prettier.svg
[eslint-config-prettier-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-prettier
[eslint-config-prettier-doc-link]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-prettier/#readme
[eslint-config-prettier-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-prettier?label=issues
[eslint-config-prettier-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-prettier%22
[eslint-config-base-package]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-base
[eslint-config-base-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-base.svg
[eslint-config-base-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-base
[eslint-config-base-doc-link]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-base/#readme
[eslint-config-base-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-base?label=issues
[eslint-config-base-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-base%22
[eslint-config-react-package]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-react
[eslint-config-react-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-react.svg
[eslint-config-react-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-react
[eslint-config-react-doc-link]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-react/#readme
[eslint-config-react-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-react?label=issues
[eslint-config-react-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-react%22
[eslint-config-vue-package]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-vue
[eslint-config-vue-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-vue.svg
[eslint-config-vue-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-vue
[eslint-config-vue-doc-link]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-vue/#readme
[eslint-config-vue-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-vue?label=issues
[eslint-config-vue-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-vue%22
[eslint-config-ts-base-package]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-base
[eslint-config-ts-base-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-ts-base.svg
[eslint-config-ts-base-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-ts-base
[eslint-config-ts-base-doc-link]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-base/#readme
[eslint-config-ts-base-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-ts-base?label=issues
[eslint-config-ts-base-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-ts-base%22
[eslint-config-ts-react-package]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-react
[eslint-config-ts-react-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-ts-react.svg
[eslint-config-ts-react-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-ts-react
[eslint-config-ts-react-doc-link]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-react/#readme
[eslint-config-ts-react-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-ts-react?label=issues
[eslint-config-ts-react-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-ts-react%22
[eslint-config-ts-vue-package]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-vue
[eslint-config-ts-vue-npm-badge]: https://img.shields.io/npm/v/@meludi/eslint-config-ts-vue.svg
[eslint-config-ts-vue-npm-link]: https://www.npmjs.com/package/@meludi/eslint-config-ts-vue
[eslint-config-ts-vue-doc-link]: https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-vue/#readme
[eslint-config-ts-vue-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20eslint-config-ts-vue?label=issues
[eslint-config-ts-vue-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+eslint-config-ts-vue%22
