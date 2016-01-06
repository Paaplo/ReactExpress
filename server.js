'use strict';

import express from 'express';
import webpack from 'webpack';
import path from 'path';
 
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.js';
 
const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    historyApiFallback: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('src'));


app.get('/', function (req,res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/api', function (req,res) {
  res.send('Hello from API');
});
app.listen(3000, function () {
	console.log('Server running at port 3000');
});