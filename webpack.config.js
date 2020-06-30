module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./js/script.ts",
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {loader: "ts-loader"}
      }
    ]
  }
};
