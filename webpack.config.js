const path = require("path");
const webpack = require("webpack");
const BUILD_DIR = path.resolve(__dirname, "./build");
const APP_DIR = path.resolve(__dirname, "./assets");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: ["@babel/polyfill", path.resolve(APP_DIR + "/Main.js")],
  },
  mode: "development",
  devServer: {
    contentBase: BUILD_DIR + "index/html",
    port: 5000,
  },
  output: {
    path: path.resolve(BUILD_DIR),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(BUILD_DIR, "index.html"),
      // Load a custom template (lodash by default)
      template: "index.html",
    }),
    new webpack.DefinePlugin({
      APP_VERSION:
        JSON.stringify(process.env.APP_VERSION) || JSON.stringify("config"),
    }),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {},
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
