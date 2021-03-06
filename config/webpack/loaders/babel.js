const path = require('path');

module.exports = {
  test: /\.js(\.erb)?$/,
  exclude: /node_modules/,
  loaders: [
      {
          loader: 'babel-loader',
          options: {
              presets: [
                  [ 'es2015', 'stage-2' ]
              ]
          }
      },
      {
          loader: 'eslint-loader',
          query: {
            enforce: 'pre',
            configFile: path.resolve('.eslintrc'),
            failOnError: true
          }
      }
  ]
};
