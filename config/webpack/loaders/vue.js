const path = require('path');

module.exports = {
  test: /.vue$/,
  loaders: [
    {
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader',
          file: 'file-loader',
          scss: 'vue-style-loader!css-loader!postcss-loader!sass-loader',
          sass: 'vue-style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax'
        },
        presets: [
          ['es2015', 'stage-2']
        ]
      }
    },
    {
      loader: 'eslint-loader',
      query: {
        enforce: 'pre',
        configFile: path.resolve('.eslintrc-vue.json'),
        failOnError: true
      }
    }
  ]
};
