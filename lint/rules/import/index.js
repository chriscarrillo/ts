'use strict'

module.exports = {
  allRules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {order: 'asc'},
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {group: 'internal', pattern: '_/**'},
          {group: 'internal', pattern: '-/**'},
          {group: 'internal', pattern: '~/**'},
          {group: 'internal', pattern: '@/**'},
        ],
      },
    ],
  },
  jsRules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-unresolved': 'error',
  },
}
