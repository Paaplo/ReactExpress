'use strict';

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import bodyParser from 'body-parser';
import config from './config';

 //Webpack
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.js';
const compiler = webpack(webpackConfig);

//MongoDB
import mongoose from 'mongoose';
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
import './api/models/post.js';
import api from './api/routes';

const app = express();
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    historyApiFallback: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('src'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function (req,res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/api', api);

app.listen(3000, function () {
	console.log('Server running at port 3000');
});