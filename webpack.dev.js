const { readFileSync } = require('fs');
const babelSettings = JSON.parse(readFileSync('.babelrc'));

module.exports = {
  entry: {
    'index': [ './src/index.js' ]
},
  resolve: {
    extensions: [ '.js', '.html' ]
},
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
},
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: babelSettings
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
	devtool: 'inline-source-map',
	watch: true
}
