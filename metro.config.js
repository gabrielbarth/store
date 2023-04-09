/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

import '@types/jest';

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
