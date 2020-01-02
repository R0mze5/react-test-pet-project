const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  const styledConfig = rewireStyledComponents(config, env, {
    displayName: true,
  });
  // do stuff with the webpack config...
  return styledConfig;
};
