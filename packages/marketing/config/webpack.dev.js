const { merge } = require("webpack-merge"); // Merge yethukku naa different webpack aa merge panrathukku use panra function

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const pacakgeJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: pacakgeJson.dependencies,
    }),
   
  ],
};

module.exports = merge(commonConfig, devConfig);
