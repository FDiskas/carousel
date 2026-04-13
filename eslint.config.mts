import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import stencil from '@stencil/eslint-plugin';

export default defineConfig([
  {
    ignores: ['eslint.config.mts', 'dist/', 'loader/', 'www/', 'node_modules/', 'stencil.config.ts'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { project: './tsconfig.json' },
    },
  },
  stencil.configs.flat.recommended,
  tseslint.configs.recommended,
  // pluginReact.configs.flat['jsx-runtime'],
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
]);
