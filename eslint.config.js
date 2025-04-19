import eslintPluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['node_modules', 'dist', 'build'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    plugins: {
      prettier: eslintPluginPrettier
    },

    rules: {
      semi: ['error', 'never'],
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'none'
        }
      ]
    },

    settings: {},
    linterOptions: {}
  },
  configPrettier
]
