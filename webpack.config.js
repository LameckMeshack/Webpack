const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  watch: true, // enabled by default in devServer
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "deploy"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
  devServer: {
    // hot: true,
    compress: true,
    open: true,
    static: {
      directory: path.join(__dirname, "deploy"),
    },
    // contentBase: "./deploy",
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  //   module: {
  //     rules: [
  //       ...{
  //         test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  //         type: "asset/resource",
  //       },
  //     ],
  //   },
};
