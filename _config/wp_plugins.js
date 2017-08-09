const
webpack = require('webpack'),
path    = require('path'),
HTML    = require('html-webpack-plugin');

module.exports = isProd => {
  
  // base plugins array
  const plugins = [
    
    new HTML({
      template: path.resolve(__dirname, '../app/index.ejs'),
      minify  : {
        preserveLineBreaks   : false,
        removeComments       : isProd,
        collapseWhitespace   : isProd,
        removeAttributeQuotes: isProd,
        removeEmptyAttributes: isProd,
        removeEmptyElements  : false,
        minifyCSS            : isProd,
        minifyJS             : isProd,
        keepClosingSlash     : false
      }
	  }),
  ];

  // prod only
  if (isProd) {
		plugins.push(
			new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug   : false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle  : {
          screw_ie8  : true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
		);
	} else {
		// dev only
		plugins.push(
			
		);
	}


  return plugins;
};