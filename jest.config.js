const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  /*
   * For a detailed explanation regarding each configuration property and type check, visit:
   * https://jestjs.io/docs/configuration
   */
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(config);
