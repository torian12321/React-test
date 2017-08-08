const
webpack     = require('webpack'),
merge       = require('webpack-merge'),
path        = require('path'),
HTML        = require('html-webpack-plugin');

const wp_common   = require('./_config/wp_common');

export_default = merge(wp_common, {
  output: {
    path    : __dirname + './public',
    filename: './bundle.js'
  }
}),


export_production = merge.smart(wp_common, {
  output: {
    path    : __dirname + '/dist',
    filename: './bundle.js'
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
    ]
});


module.exports = function(env) {
  if(process.env.NODE_ENV === 'production'){
    return export_production;
  }else{
    return export_default;
  }
}