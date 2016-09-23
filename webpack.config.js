var webpack = require('webpack');
var path = require('path')

export default {
  devtool: 'eval', // set up the cache assisteant that demines how much stuff webpack relaods
  entry: './client/index', // where the index.js is stored at. Entry point.
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',   // where bundle.js is put in the browser. Bundled file in localhost:7779/static/
  },
  module: { // if there's a change in the .js files the files under current directory . Load it in babel, except for files in node_modules
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname,
    }]
  },
};
