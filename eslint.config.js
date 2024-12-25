import js from '@eslint/js'
import tsparser from '@typescript-eslint/parser'
import pluginImport from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, pluginReact.configs.flat.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsparser,
    },
    plugins: {
      prettier: prettier,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: pluginImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': ['error'],
      //react
      'react/react-in-jsx-scope': ['off'],
      // react-hooks
      'react-hooks/rules-of-hooks': ['error'],
      'react-hooks/exhaustive-deps': ['warn'],
      //базовые
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      curly: ['error'],
      radix: ['error'],
      'newline-before-return': ['error'],
      'prefer-destructuring': ['error', { object: true, array: false }],
      'arrow-body-style': ['warn', 'as-needed'],
      'no-unused-vars': ['off'],
      'no-empty-pattern': ['warn'],
      'no-debugger': ['warn'],
      'block-scoped-var': ['warn'],
      'max-depth': ['warn', { max: 3 }],
      'no-var': ['error'],
      'prefer-const': ['warn', { ignoreReadBeforeAssign: true }],
      'no-case-declarations': ['off'],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            { pattern: 'app/**', group: 'internal' },
            { pattern: 'pages/**', group: 'internal' },
            { pattern: 'widjets/**', group: 'internal' },
            { pattern: 'features/**', group: 'internal' },
            { pattern: 'entities/**', group: 'internal' },
            { pattern: 'shared/assets/**', group: 'internal' },
            { pattern: 'shared/ui/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
)
