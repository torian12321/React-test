const webpack = require('./webpack.config');

module.exports = {
	title         : 'Components Styleguide',
	components    : 'app/components/**/index.jsx',
	template      : './styleguide/template.html',
	defaultExample: false,
	webpackConfig : webpack.common(sourceMap = false),
};