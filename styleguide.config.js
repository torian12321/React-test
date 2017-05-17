const path = require('path');
const loaders = require('loaders');

module.exports = {
	title         : 'Components Styleguide',
	components    : 'app/components/**/index.jsx',
	template      : path.resolve(__dirname, 'styleguide/template.html'),
	defaultExample: false,
	webpackConfig: {
		module: {
			loaders: loaders.all,
		},
	},
};
