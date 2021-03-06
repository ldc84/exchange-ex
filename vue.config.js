const path = require('path');
const JsConfig = require('./jsconfig.json');

const vueConfig = {
  configureWebpack: {
    resolve: {
      alias: (function(config = {}) {
        const paths = {};
        for (let dirname in config) {
          paths[dirname.replace('/*', '')] = path.resolve(config[dirname][0].replace('*', ''));
        }
        return paths;
      })(JsConfig.compilerOptions.paths),
    },
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/exchange-ex/' : '/',
};

module.exports = vueConfig;