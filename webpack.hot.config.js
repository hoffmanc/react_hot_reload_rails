var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: [
    'webpack-dev-server/client?http://localhost:8080/assets/',
    'webpack/hot/only-dev-server',
    './client/entry.jsx',
  ]
};

config.output = {
  // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
  path: path.join(__dirname, 'app', 'assets', 'javascripts'),
  // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
  filename: 'bundle.js',
  // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
  publicPath: 'http://localhost:8080/javascripts',
};

config.resolve = {
  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: ['', '.jsx', '.js'],
};

config.module = {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"],
    }
  ]
};

config.plugins = [
  //new webpack.HotModuleReplacementPlugin(),
  //new webpack.NoErrorsPlugin()
];

