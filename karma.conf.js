process.env.NODE_ENV = 'test';

var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
     plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
     // require("karma-mocha-reporter"),
      require("karma-chrome-launcher"),
      require("karma-sourcemap-loader")
    ],
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel',         exclude: /node_modules/,
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
				loaders: [ 'url-loader?limit=10000' ],
		  },
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};