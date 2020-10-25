'use strict'

module.exports = {
  allRules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'error',
    'react/forbid-dom-props': ['error', {forbid: ['style']}],
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-fragments': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-multi-comp': 'error',
    'react/no-unsafe': 'error',
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': ['error', {component: true, html: true}],
  },
}
