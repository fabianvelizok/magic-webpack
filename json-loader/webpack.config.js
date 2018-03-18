const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/, // File types
        use: ['style-loader', 'css-loader'] // Loader list
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
