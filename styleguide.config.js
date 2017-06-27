const webpack = require('./webpack.config');

module.exports = {
	title         : 'Components Styleguide',
	template      : './styleguide/template.html',
	defaultExample: false,
	skipComponentsWithoutExample: true,
	webpackConfig : webpack.common(sourceMap = false),
	//components    : 'app/components/**/index.jsx',
	sections: [
		{ name: 'Components', components: 'app/components/*/index.jsx' },
		{ name: 'Form'      , components: 'app/components/form/**/index.jsx' },
		{ name: 'Helpers'   , components: 'app/components/helpers/**/index.jsx' }
	],
};