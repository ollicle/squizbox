const { readFileSync } = require('fs');
const babelSettings = JSON.parse(readFileSync('.babelrc'));
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
	
  plugins: [
//     new webpack.LoaderOptionsPlugin({
//       minimize: true,
//       debug: false
//     }),
    new UglifyJsPlugin(
		{
		  mangle: {
			screw_ie8: true,
			keep_fnames: true
		  },
		  compress: {
			screw_ie8: true
		  },
		  comments: false
		}
    )
  ]
}
