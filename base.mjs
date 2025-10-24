// @ts-check

import fs from 'node:fs'
import path from 'node:path'
import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

const gitignorePath = path.resolve('.', '.gitignore')

const config = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...(fs.existsSync(gitignorePath) ? [includeIgnoreFile(gitignorePath)] : []),
]

export default config;