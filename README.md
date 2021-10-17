# Package boilerplate

A boilerplate for NPM packages.

## Getting started

```bash
$ npm ci
```

Using `ci` instead of `install` ensures dependency versions are derived from the package lock.

## Code structure

All code lives in the `/src` folder. In order to expose your code, you'll need to export it in the `index.ts` file.

## Scripts

### Build

```bash
$ npm run build
```

Transpiles source code down to CommonJS and generates TypeScript typings into a `/lib` folder. This folder is what will be released on NPM.

### Commit

```bash
$ npm run commit
```

Runs the Commitizen CLI to format commit messages in the required Conventional Commit format.

### Docgen

```bash
$ npm run docgen
```

Generates documentation from the JSDoc comments within the codebase. Documentation is output to a `/docs` folder.

### Lint

```bash
$ npm run lint
```

Runs ESLint against source code.

### Release

```bash
$ npm run release
```

Releases and versions the package on NPM. Also generates automated release notes on GitHub.

### Test

```bash
# Run unit tests
$ npm test

# Run unit tests in watch mode
$ npm run test:watch
```

Runs unit tests. Watch mode will selectively run tests where code has been modified.

## Commit messages

This project uses Conventional Commits to version the package correctly and generate release notes. To find out more about Conventional Commits and how to use them, [click here](https://www.conventionalcommits.org/en/v1.0.0/).

You can generate valid commit messages by running `npm run commit` and following the instructions on your terminal window. Windows users should use the Bash terminal from the Windows Subsystem for Linux to run this.

All commit messages are run through a validator and any invalid commit messages will be rejected.
