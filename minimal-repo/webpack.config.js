"use strict";

module.exports = {
  devtool: "inline-source-map",
  entry: "./packages/foo/foo.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "../"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
