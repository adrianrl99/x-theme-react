import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  moduleDirectories: ['node_modules', 'src/utils', __dirname],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^#/(.*)$': '<rootDir>/__mocks__/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}

export default config
