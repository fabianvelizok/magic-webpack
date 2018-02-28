const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/, // File types
        use: ["style-loader", "css-loader"] // Loader list
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  }
};
