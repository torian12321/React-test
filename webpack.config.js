const
webpack     = require('webpack'),
merge       = require('webpack-merge'),
path        = require('path'),
HTML        = require('html-webpack-plugin'),
ExtractTextPlugin = require("extract-text-webpack-plugin");

const loaders = require('./_config/loaders');
const alias = require('./_config/alias');


const
common = function(){
  let
  conf = {
    entry  : './app/app',
    resolve: {
      extensions: ['.js', '.jsx', '.less'],
      alias     : alias
    },
    module: {
      loaders: loaders
    }
  };
  return conf;
},


export_default = merge(common(), {
  output: {
    path    : __dirname + './public',
    filename: './bundle.js'
  }
}),


export_production = merge.smart(common(), {
  output: {
    path    : __dirname + '/dist',
    filename: './bundle.js'
  },
  module: {
    // loaders: [
    //   {
    //     test: /\.(css|less)$/,
    //     use: ExtractTextPlugin.extract({
    //       fallback: "style-loader",
    //       use: [
    //         { loader: "css-loader" },
    //         { loader: "less-loader"}
    //       ]
    //     })
    //   }
    // ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
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
    }),
    new HTML({
			template: './app/index.ejs',
			minify: {
				preserveLineBreaks: false,
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeEmptyAttributes: true,
				removeEmptyElements: false,
				minifyCSS: true,
				minifyJS: true,
				keepClosingSlash: false
			}
		}),
  //  new ExtractTextPlugin("./dist/styles_comp.css"),
  //   new ExtractTextPlugin({
  //     filename: "[name].[contenthash].css",
  //     disable: process.env.NODE_ENV === "development"
  // })
    ]
});


module.exports = function(env) {
  if(process.env.NODE_ENV === 'production'){
    return export_production;
  }else{
    return export_default;
  }
}

module.exports.common = common;