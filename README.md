[![npm version](https://img.shields.io/npm/v/@aluisio/eslint-config.svg)](https://www.npmjs.com/package/@aluisio/eslint-config)
[![Downloads](https://img.shields.io/npm/dm/@aluisio/eslint-config.svg)](https://www.npmjs.com/package/@aluisio/eslint-config)

<br>

# ESLint config for React and NodeJS

## Whats included?

- Airbnb config;
- Import plugin;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Support for eslint 9 flat config;

## Setup

Install dependencies:
```
npm i -D @aluisio/eslint-config
```

### React
Inside `eslint.config.mjs`
```
import config from '@aluisio/eslint-config/react.mjs'

export default config
```

### Node.js
Inside `eslint.config.mjs`
```
import config from '@aluisio/eslint-config/node.mjs'

export default config
```

##

### Override Settings
You can override any ESLint config by changing your own `eslint.config.mjs` file. The example below changes Enforce a maximum line length.
```
import config from '@aluisio/eslint-config/node.mjs';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  ...config,
  {
    rules: {
      'max-len': ['warn', { code: 180 }],
    },
  },
];

```
