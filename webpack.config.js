const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./client/src/index.js",
  output: {
    path: __dirname + "/client/dist",
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: false,
      },
      hash: false,
      template: "./client/src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          "eslint-loader",
        ],
      },
    ],
  },
};
