const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const mode = process.env.NODE_ENV ?? "development";

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.join(process.cwd(), "static")
  },

  externals: {
    "liqvid": "Liqvid",
    "ractive-player": "RactivePlayer",
    "rp-recording": "RPRecording",
    "rangetouch": "RangeTouch",
    "react": "React",
    "react-dom": "ReactDOM"
  },

  mode: mode,

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "ts-loader"
      }
    ],
  },

  // necessary due to bug in old versions of mobile Safari
  devtool: false,

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          safari10: true
        }
      })
    ],
    emitOnErrors: true
  },
  
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@lib": `${__dirname}/lib`,
      "@env": `${__dirname}/src/@${mode}`
    }
  }
};
