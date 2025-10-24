// @ts-check

import { configs } from 'eslint-config-airbnb-extended/legacy';
import importHelpers from 'eslint-plugin-import-helpers'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import js from '@eslint/js'
import config from './base.mjs'

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  ...config,
  ...configs.react.recommended,
  ...configs.react.hooks,
  ...configs.react.typescript,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      js,
      react,
      'import-helpers': importHelpers,
      'react-hooks': reactHooks
    },
    ignores: ['**/node_modules/**', '**/dist/**', '.next/**'],
    rules: {
      'react/jsx-filename-extension': 'off',
      'react/button-has-type': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unused-prop-types': 'warn',
      'react/no-unstable-nested-components': 'warn',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',

      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false
        }
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@stylistic/space-before-function-paren': 'off',
      'max-len': ['warn', { code: 500 }],
      'import/prefer-default-export': 'off',
      'no-nested-ternary': 'off',
      'arrow-body-style': 'off',
      'no-return-assign': 'off',
      'no-underscore-dangle': 'off',
      'no-plusplus': 'off',

      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/control-has-associated-label': 'off',

      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            '/^react$/',
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
      react: {
        version: 'detect',
      },
    },
  },
]
