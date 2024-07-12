module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import-helpers',
  ],
  rules: {
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 500,
      },
    ],
    'import/prefer-default-export': 'off',
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
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
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
    'dist',
  ],
};
