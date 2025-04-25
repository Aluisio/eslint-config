// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...neostandard({
    ignores: resolveIgnoresFromGitignore(),
  }),
]
