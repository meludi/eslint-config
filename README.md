# @meludi/eslint-config

Shareable eslint configuration.

## Packages

This repository is a monorepo that using [Lerna](https://github.com/lerna/lerna). That means that we actually publish [several packages](/packages) to npm from the same codebase, including:

| Package                                                                                                                 | Docs                                                                                                                                                                      | Description                                |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`@meludi/eslint-config-prettier`](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-prettier) | [![](https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square)](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-prettier/#readme) | Format your code.                          |
| [`@meludi/eslint-config-base`](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-base)         | [![](https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square)](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-base/#readme)     | Format and fix your javascript code.       |
| [`@meludi/eslint-config-react`](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-react)       | [![](https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square)](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-react/#readme)    | Format and your react code.                |
| [`@meludi/eslint-config-vue`](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-vue)           | [![](https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square)](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-vue/#readme)      | Format and your vue code.                  |
| [`@meludi/eslint-config-ts-base`](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-base)   | [![](https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square)](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-base/#readme)  | Format and fix your typescript code.       |
| [`@meludi/eslint-config-ts-react`](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-react) | [![](https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square)](https://github.com/meludi/eslint-config/tree/master/packages/eslint-config-ts-react/#readme) | Format and fix your typescript react code. |

## Development

This repository is mainly based on [eslint](https://eslint.io/) and follows [semantic versioning](https://www.conventionalcommits.org/en/v1.0.0/).

Useful [lerna commands](https://lerna.js.org/docs/api-reference/commands).

### Verdaccio - local npm registry

https://verdaccio.org/

```sh
# install
$ npm install --location=global verdaccio

# run
$ verdaccio

# server
http://localhost:4873/

# verdaccio storage directory on mac
~/.config/verdaccio/storage/
```

Add the following to a gitignored `.npmrc` files to the root of your project to publish to local npm registry:

```sh
# .npmrc
registry=http://localhost:4873
```

#### Host, Publish and Manage Private npm Packages with Verdaccio

https://www.sitepoint.com/private-npm-packages-verdaccio/

## LICENSE

[MIT](LICENSE)
