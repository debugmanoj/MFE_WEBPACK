const { merge } = require("webpack-merge"); // Merge yethukku naa different webpack aa merge panrathukku use panra function
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const pacakgeJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: pacakgeJson.dependencies,
    }),


  ],
};

module.exports = merge(commonConfig, devConfig);
