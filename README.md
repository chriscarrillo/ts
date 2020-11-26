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
  "extends": "./node_modules/@chriscarrillo/ts/tsconfig.json"
}
```

In `tsconfig.base.json`:

```
{
  "compilerOptions": {"baseUrl": "./src"},
  "extends": "./node_modules/@chriscarrillo/ts/config/base.json"
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

## Jest

```
yarn add babel-plugin-dynamic-import-node
yarn add jest
yarn add ts-jest
```

or

```
npm install babel-plugin-dynamic-import-node
npm install jest
npm install ts-jest
```

In `jest.config.js`:

```
const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig')

module.exports = {
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
    preset: '@chirscarrillo/ts'
}
```

## Visual Studio Code

`settings.json`:

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.rulers": [100],
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.format.enable": false,
  "typescript.tsdk": "node_modules/typescript/lib",
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
}
```
