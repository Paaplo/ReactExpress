'use strict';

var path = require('path');
//	webpack = require('webpack');

function config () {
	return {
		entry: {
			application: './src/application',
		},
		output: {
			path: path.join(__dirname, 'public/scripts'),
			filename: 'bundle.js'
		},
		module: {
			loaders: [
		    {
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
     		  loader: 'babel',
     		  query: {
	              presets: ['es2015', 'react'],
		          cacheDirectory: true
		      }

		     },
				{test: /\.less/, loader: 'style!css!less'},
				{test: /\.css/, loader: 'style!css'},
			]
		}
	};
}

module.exports = config();
