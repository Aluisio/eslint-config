[![npm version](https://img.shields.io/npm/v/@aluisio/eslint-config.svg)](https://www.npmjs.com/package/@aluisio/eslint-config)
[![Downloads](https://img.shields.io/npm/dm/@aluisio/eslint-config.svg)](https://www.npmjs.com/package/@aluisio/eslint-config)

<br>

# ESLint config for React and NodeJS

## Whats included?

- Airbnb config extended;
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
import config from '@aluisio/eslint-config/react'

export default config
```

### Node.js
Inside `eslint.config.mjs`
```
import config from '@aluisio/eslint-config/node'

export default config
```

##

### Override Settings
You can override any ESLint config by changing your own `eslint.config.mjs` file. The example below changes Enforce a maximum line length.
```
import config from '@aluisio/eslint-config/node';

import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...config,
  {
    rules: {
      'max-len': ['warn', { code: 180 }],
    },
  },
]);

```
