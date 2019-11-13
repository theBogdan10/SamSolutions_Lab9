const path = require('path');

module.exports = {
  entry:
    './src/modules/index.js',
  output: {
    filename:
      'bundle.js',
    path: path.resolve(
      __dirname,
      'dist'
    )
  },
  devtool:
    'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader:
            'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
