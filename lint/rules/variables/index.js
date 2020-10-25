'use strict'

module.exports = {
  allRules: {
    'no-label-var': 'error',
    // Encourage use of @jest/globals
    'no-restricted-globals': [
      'error',
      'jest',
      'expect',
      'it',
      'test',
      'fit',
      'xit',
      'xtest',
      'describe',
      'xdescribe',
      'fdescribe',
      'beforeAll',
      'beforeEach',
      'afterEach',
      'afterAll',
    ],
    'no-shadow': 'error',
    'no-undef-init': 'error',
  },
}
