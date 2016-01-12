'use strict';

var path = require ('path');
var webpack = require ('webpack');
var autoprefixer = require('autoprefixer');

function config (env) {
	return {
		devtool: 'cheap-module-eval-source-map',
		entry: [
      'webpack/hot/dev-server',
		  'webpack-hot-middleware/client',
		  'bootstrap-loader',
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
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss',
          'sass',
        ],
      },
			{
				test: /\.less$/, 
				loader: 'style!css!less'
			},
			{
				test: /\.css$/,
				loaders:[
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss'
          ]		
			},
			{
        test: /\.(woff2?|ttf|eot|svg)$/,
        loaders: [ 'url?limit=10000' ],
		  },
		  { 
		  	test: /bootstrap-sass\/assets\/javascripts\//, 
		  	loader: 'imports?jQuery=jquery' 
		  },
			]
		},
		plugins: [
		  new webpack.optimize.OccurenceOrderPlugin(), // recommanded by webpack
		  new webpack.HotModuleReplacementPlugin(),
		  new webpack.NoErrorsPlugin() ,// recommanded by webpack

		],
		 postcss: [ autoprefixer ],	
	};
}

module.exports = config();
