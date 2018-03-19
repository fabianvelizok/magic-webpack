var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  var plugins = [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    })
  ];

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanPlugin(['dist'], { root: __dirname })
    );
  }

  return {
    entry: {
      invie: path.resolve(__dirname, 'src/index')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist') + '/',
      chunkFilename: 'js/[id].[chunkhash].js'
    },
    devServer: {
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-2']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]'
            }
          }
        }
      ]
    },
    plugins: plugins
  };
};
