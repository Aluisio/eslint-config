// @ts-check

import js from '@eslint/js'
import { defineConfig } from 'eslint/config';
import { configs } from 'eslint-config-airbnb-extended/legacy';
import importHelpers from 'eslint-plugin-import-helpers'
import globals from 'globals'
import config from './base.mjs'

export default defineConfig([
  ...config,
  ...configs.base.recommended,
  ...configs.base.typescript,
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node
    },
    plugins: {
      js,
      'import-helpers': /** @type {any} */ (importHelpers),
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
      '@typescript-eslint/naming-convention': 'warn',
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
      'import/extensions': ['.js', '.ts'],
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts'],
        },
      },
    },
  },
])
