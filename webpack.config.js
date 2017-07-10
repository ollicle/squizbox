const { readFileSync } = require('fs');
const babelSettings = JSON.parse(readFileSync('.babelrc'));

module.exports = {
  entry: {
    'index': [ './src/index.js' ]
},
// 	plugins: [
// 		new webpack.HotModuleReplacementPlugin()
// 	],
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
	devServer: {
// 		hot: true, // Tell the dev-server we're using HMR
// 		contentBase: path.resolve(__dirname, 'build'),
		compress: true,
// 		https: true,
		publicPath: './build/',
		host: '192.168.178.26',
		port: 3333,
		public: '192.168.178.26:3333'
  }
 }
