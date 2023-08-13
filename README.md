# Custom TypeScript Configurations

# Installation

```bash
pnpm install -D @chriscarrillo/ts
```

# Set-Up

## TypeScript

In `tsconfig.json`:

```json
{
  "extends": "./node_modules/@chriscarrillo/ts/tsconfig.json"
}
```

In `tsconfig.base.json`:

```json
{
  "compilerOptions": { "baseUrl": "./src" },
  "extends": "./node_modules/@chriscarrillo/ts/config/base.json"
}
```

## Prettier

```bash
ppnpm install -D prettier
```

In `.prettierrc.js`:

```javascript
module.exports = require('@chriscarrillo/ts/format');
```

## ESLint

```bash
pnpm install -D @arthurgeron/eslint-plugin-react-usememo @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-functional eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-jsdoc eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sonarjs
```

In `.eslintrc.js`:

```javascript
module.exports = {
  ...require('@chriscarrillo/ts/lint'),
};
```
