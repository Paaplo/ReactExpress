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

const app = express();

//MongoDB
import mongoose from 'mongoose';
mongoose.connect(config[app.settings.env], function(err) {
    if(err){
        console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
    }
    else {
        console.log('Connected to Database: ' + config[app.settings.env]);
    }
});
import './api/models/post.js';
import api from './api/routes';

//more webpack
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    historyApiFallback: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('src'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', function (req,res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('*', function(req,res){
  res.sendFile(__dirname + '/public/index.html');   
});

app.listen(3000, function () {
	console.log('Server running at port 3000');
});

module.exports =  app;