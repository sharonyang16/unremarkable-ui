// @ts-check

import js from '@eslint/js';

import tseslint from 'typescript-eslint';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ['**/*.{js,ts}'] },
  { ignores: ['node_modules/**', 'dist/**', 'out/**', 'build/**'] },
  {
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  },
]);

export default eslintConfig;
