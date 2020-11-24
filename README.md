# Custom TypeScript Configurations

# Installation

```
yarn add -D @chriscarrillo/ts
```

or

```
npm install -D @chriscarrillo/ts
```

# Set-Up

## TypeScript

In `tsconfig.json`:

```
{
  "extends": "@chriscarrillo/ts"
}
```

## Prettier

```
yarn add -D prettier
```

or

```
npm install -D prettier
```

In `.prettierrc.js`:

```
modules.exports = require('@chriscarrillo/ts/format')
```

## ESLint

```
yarn add -D @typescript-eslint/eslint-plugin
yarn add -D @typescript-eslint/parser
yarn add -D eslint
yarn add -D eslint-config-prettier
yarn add -D eslint-plugin-functional
yarn add -D eslint-plugin-import
yarn add -D eslint-plugin-jsdoc
yarn add -D eslint-plugin-prettier
yarn add -D eslint-plugin-react
yarn add -D eslint-plugin-react-hooks
yarn add -D eslint-plugin-sonarjs
```

or

```
npm install -D @typescript-eslint/eslint-plugin
npm install -D @typescript-eslint/parser
npm install -D eslint
npm install -D eslint-config-prettier
npm install -D eslint-plugin-functional
npm install -D eslint-plugin-import
npm install -D eslint-plugin-jsdoc
npm install -D eslint-plugin-prettier
npm install -D eslint-plugin-react
npm install -D eslint-plugin-react-hooks
npm install -D eslint-plugin-sonarjs
```

In `.eslintrc.js`:

```
module.exports = {
  ...require('@chriscarrillo/ts/lint')
}
```
