const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    /* Rules vanthu file vantha piragu yeppadi process pannanum example ku 
        non javascript file aa babel script use panni convert pannikalam so antha maari visiyam ku use aaguthu */

    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/, // exclude vanthu intha folder ku yetha rules use pannatha nu solarthuku
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
