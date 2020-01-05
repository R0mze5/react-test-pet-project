const path = require('path');

// console.log(process.env);

module.exports = {
  webpack: {
    alias: {
      '@features': path.resolve(__dirname, 'src/features'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@features(.*)$': '<rootDir>/src/features$1',
        '^@shared(.*)$': '<rootDir>/src/shared$1',
        '^@ui(.*)$': '<rootDir>/src/ui$1',
        '^@router(.*)$': '<rootDir>/src/router$1',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@theme(.*)$': '<rootDir>/src/theme$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
      },
    },
  },
};
