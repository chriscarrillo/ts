'use strict'

module.exports = {
  allRules: {
    'jsdoc/check-alignment': 'off',
    'jsdoc/match-description': ['error', {contexts: ['any']}],
    'jsdoc/newline-after-description': ['error', 'never'],
    'jsdoc/require-description': ['error', {contexts: ['any']}],
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
    'jsdoc/require-jsdoc': [
      'error',
      {contexts: ['ExportDefaultDeclaration', 'ExportNamedDeclaration']},
    ],
    'jsdoc/require-returns-type': 'off',
  },
  tsRules: {
    'jsdoc/no-types': 'error',
    'jsdoc/require-param-type': 'off',
  },
}
