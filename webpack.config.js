'use strict';

var path = require ('path');
var webpack = require ('webpack');

function config (env) {
	return {
		devtool: 'cheap-module-eval-source-map',
		entry: [
        'webpack/hot/dev-server',
		  'webpack-hot-middleware/client',
		  path.join(__dirname, 'src', 'application.js'),
		],		
		output: {
			path: path.join(__dirname, 'public/scripts'),
			filename: 'bundle.js',
  			publicPath: 'http://localhost:3000/scripts/'
		},
		module: {
			loaders: [
		    {
		        test: /\.js$/,
		        exclude: /node_modules/,
     		    loader: 'babel',

		    },
			{
				test: /\.less/, 
				loader: 'style!css!less'
			},
			{
				test: /\.css/, 
				loader: 'style!css'
			}
			]
		},
		plugins: [
		  new webpack.optimize.OccurenceOrderPlugin(), // recommanded by webpack
		  new webpack.HotModuleReplacementPlugin(),
		  new webpack.NoErrorsPlugin() // recommanded by webpack
		],	
	};
}

module.exports = config();
