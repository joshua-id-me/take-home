const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  mode: "development",

  entry: ["./src/app/main.jsx"],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "static/index.html"), to: "index.html" },
    ]),
  ],
};

module.exports = config;
