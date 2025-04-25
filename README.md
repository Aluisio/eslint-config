# ESLint config for React and NodeJS

## Whats included?

- Airbnb config;
- Import plugin;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;

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
import { defineConfig } from 'eslint/config'

import config from '@aluisio/eslint-config/node.mjs'

export default defineConfig(
  ...config,
  {
    rules: {
      'max-len': ['warn', { code: 180 }],
    }
  }
)

```
