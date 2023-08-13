'use strict';

module.exports = {
  allRules: {
    'functional/immutable-data': [
      'error',
      {
        ignoreAccessorPattern: ['module.exports', 'this', 'exports.*', 'process.**'],
        ignoreImmediateMutation: true,
      },
    ],
  },
};
