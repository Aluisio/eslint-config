// @ts-check

import { configs } from 'eslint-config-airbnb-extended/legacy';
import importHelpers from 'eslint-plugin-import-helpers'
import globals from 'globals'
import js from '@eslint/js'
import config from './base.mjs'

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  ...config,
  ...configs.base.recommended,
  ...configs.base.typescript,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node
    },
    plugins: {
      js,
      'import-helpers': importHelpers,
    },
    ignores: ['**/node_modules/**', '**/dist/**'],
    rules: {
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'max-len': ['warn', { code: 500 }],
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
      'no-restricted-syntax': 'off',
      'no-await-in-loop': 'off',
      'no-plusplus': 'off',
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            'module',
            '/^@[A-Z,a-z]/',
            '/^@\//',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
    },
    settings: {
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
]
