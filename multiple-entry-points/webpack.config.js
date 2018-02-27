const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    prices: path.resolve(__dirname, "src/js/prices.js"),
    contact: path.resolve(__dirname, "src/js/contact.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("css/[name].css")]
};

