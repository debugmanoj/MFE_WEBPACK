const { merge } = require("webpack-merge"); // Merge yethukku naa different webpack aa merge panrathukku use panra function
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const pacakgeJson = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // Intha maari yen production la fileName tarum naa caching issues poga
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: pacakgeJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
