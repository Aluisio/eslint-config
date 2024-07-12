module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import-helpers',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'off',
    ],
    'react/button-has-type': [
      'off',
    ],
    'react/react-in-jsx-scope': [
      'off',
    ],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'react/no-unused-prop-types': [
      'warn',
    ],
    'react/no-unstable-nested-components': [
      'warn',
    ],
    'max-len': [
      'warn',
      {
        code: 500,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^react/',
          'module',
          '/^@[A-Z,a-z]/',
          '/^@\//',
          [
            'parent',
            'sibling',
            'index',
          ],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: [
        '.ts',
        '.tsx',
        '.d.ts',
      ],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  ignorePatterns: [
    'node_modules',
    '.next',
  ],
};
