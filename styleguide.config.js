//const webpack = require('./webpack.config');
const path = require('path');
const wp_common   = require('./_config/wp_common');

module.exports = {
	title         : 'Components Styleguide',
	template      : './styleguide/template.html',
	serverPort    : 6060,
	defaultExample: false,
	showUsage     : false,
	showCode      : false,
	highlightTheme: 'material',
	skipComponentsWithoutExample: true,
	webpackConfig : wp_common,
	sections: [
		{ name: 'Components', components: 'app/components/*/index.jsx' },
		{ name: 'Form'      , components: 'app/components/form/**/index.jsx' },
		{ name: 'Helpers'   , components: 'app/components/helpers/**/index.jsx' }
	],
    getComponentPathLine: function (componentPath) {
		// Use folder name as import reference
		var dir = path.dirname(componentPath).split('/');

        return `import { ${dir[dir.length-1]} } from 'react-test';`;
	},
};