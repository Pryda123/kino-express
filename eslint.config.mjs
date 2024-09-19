import globals from 'globals'
import pluginJs from '@eslint/js'


export default [
  {files: ['**/*.js'], languageOptions: {sourceType: 'script'}},
  {
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    rules: {
      semi: ['error', 'never'],
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'no-trailing-spaces': ['error', { 'ignoreComments': true }],
      'padded-blocks': ['error', 'never']
    }
  },
  pluginJs.configs.recommended
]