'use strict'

module.exports = {
  allRules: {
    'capitalized-comments': ['error', 'always', {ignoreConsecutiveComments: true}],
    'consistent-this': ['error', 'self'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'max-len': ['error', 100],
    'max-lines': ['error', 500],
    'max-lines-per-function': ['error', 300],
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-new-object': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-exponentiation-operator': 'error',
    'sort-keys': 'error',
  },
}
