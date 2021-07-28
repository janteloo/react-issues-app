const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {
      react: path.join(__dirname, "node_modules", "react"),
    },
  },
  entry: ["babel-polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|png)(\?.*$|$)/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
