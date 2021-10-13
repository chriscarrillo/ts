'use strict'

const path = require('path')

module.exports = {
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
      tsconfig: path.join(__dirname, './config/node.json'),
    },
  },
  preset: 'ts-jest',
}
