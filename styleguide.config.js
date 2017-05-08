const loaders = require('loaders');
module.exports = {
	components: 'app/components/**/index.jsx',
	defaultExample: true,
	webpackConfig: {
		module: {
			loaders: loaders.all,
		},
	},
};
