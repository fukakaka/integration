const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "packages/front/src/main.js",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "packages/front/src"),
      },
    },
  },
});
