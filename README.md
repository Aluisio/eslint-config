# Aluisio ESLint config

## Whats included?

- Airbnb config base;
- Import plugin;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;

## Setup

Install dependencies:
```
npm i -D eslint @aluisio/eslint-config
```

### React with Next.js
Inside `.eslintrc.json`
```
{
  "extends": [
    "@aluisio/eslint-config/next"
  ]
}
```

### React without Next.js
Inside `.eslintrc.json`
```
{
  "extends": "@aluisio/eslint-config/react"
}
```

### Node.js
Inside `.eslintrc.json`
```
{
  "extends": "@aluisio/eslint-config/node"
}
```
