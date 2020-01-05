const path = require('path');

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    '@ui': path.resolve(__dirname, '../src/ui'),
    '@features': path.resolve(__dirname, '../src/features'),
    '@shared': path.resolve(__dirname, '../src/shared'),
    '@router': path.resolve(__dirname, '../src/router'),
    '@theme': path.resolve(__dirname, '../src/theme'),
    '@forms': path.resolve(__dirname, '../src/forms'),

    '@store': path.resolve(__dirname, '../src/store'),
  };

  return config;
};
