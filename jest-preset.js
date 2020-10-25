'use strict'

const path = require('path')
const preset = require('ts-jest/jest-preset')

module.exports = {
  ...preset,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    'ts-jest': {
      babelConfig: {
        plugins: ['dynamic-import-node'],
      },
      isolatedModules: true,
      tsConfig: path.join(__dirname, './config/node.json'),
    },
  },
  testEnvironment: 'node',
}
