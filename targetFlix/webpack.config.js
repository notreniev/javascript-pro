const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: './public'
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ]
}
