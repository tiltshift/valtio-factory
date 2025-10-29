export default {
  projects: [
    {
      displayName: 'test',
      preset: 'ts-jest',
      coveragePathIgnorePatterns: ['/node_modules/', '/example/'],
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
      globals: {
        'ts-jest': {
          useESM: true,
        },
      },
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/{example,lib}/**/*.{ts,tsx}', '<rootDir>/*.{ts,tsx}'],
    },
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
