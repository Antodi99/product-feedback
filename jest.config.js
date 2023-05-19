/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = () => ({
  clearMocks: true,
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.(ts|tsx)'],
  preset: 'ts-jest',
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  setupFiles: ['./test/setup-tests.ts'],
})
