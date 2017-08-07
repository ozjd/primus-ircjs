const path = require('path'),
      BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    library: "primusIrcJS",
    filename: 'primus-ircjs.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new BabiliPlugin()
  ]
}
