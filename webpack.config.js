process.env.NODE_ENV = 'production';

const reactScriptsConfig = require('react-scripts-ts/config/webpack.config.prod');

module.exports = Object.assign({}, reactScriptsConfig, {
  output: Object.assign({}, reactScriptsConfig.output, {
    path: '/dist'
  })
});