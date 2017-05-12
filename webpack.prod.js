// const Merge = require('webpack-merge');
// const CommonConfig = require('./webpack.common.js');
// const webpack = require('webpack');

// // module.exports = function(env) {
// //   return Merge(CommonConfig, {
    
// //   })
// // }


const
path    = require('path'),
webpack = require('webpack');

module.exports = {
  entry: './app/app',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ],
  resolve: {
    //root: __dirname,
    alias: {
      Main  : path.resolve(__dirname, './app/components/Main'),
      Nav   : path.resolve(__dirname, './app/components/Nav'),

      // UI
      Modal      : path.resolve(__dirname, 'app/components/Modal'),
      Loader     : path.resolve(__dirname, 'app/components/Loader'),
      Link       : path.resolve(__dirname, 'app/components/Link'),
      Rating     : path.resolve(__dirname, 'app/components/Rating'),
      ProgressBar: path.resolve(__dirname, 'app/components/ProgressBar'),
      Panel      : path.resolve(__dirname, 'app/components/Panel'),
      Quote      : path.resolve(__dirname, 'app/components/Quote'),
      Accordion  : path.resolve(__dirname, 'app/components/Accordion'),
      Avatar     : path.resolve(__dirname, 'app/components/Avatar'),
      Gallery    : path.resolve(__dirname, 'app/components/Gallery'),
      Img        : path.resolve(__dirname, 'app/components/Img'),
      Tabs       : path.resolve(__dirname, 'app/components/Tabs'),
      Icon       : path.resolve(__dirname, 'app/components/Icon'),
      
      // Form
      Radio      : path.resolve(__dirname, 'app/components/form/Radio'),
      Checkbox   : path.resolve(__dirname, 'app/components/form/Checkbox'),
      Input      : path.resolve(__dirname, 'app/components/form/Input'),
      Textarea   : path.resolve(__dirname, 'app/components/form/Textarea'),
      Switch     : path.resolve(__dirname, 'app/components/form/Switch'),
      Button     : path.resolve(__dirname, 'app/components/form/Button')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: {presets: ['react', 'es2015', 'stage-1']}},
      { test: /\.(woff|woff2)$/, loader:'url-loader?prefix=font/&limit=5000' },
      { test: /\.(ttf|otf)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(mp3|wav)$/, loader: 'url-loader?limit=1' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=25000' },
    ],
  }
};
