const
merge     = require('webpack-merge'),
path      = require('path');
wp_common = require('./_config/wp_common'),
wp_plugins= require('./_config/wp_plugins');

const isProd = process.env.NODE_ENV === 'production';
const outDir = isProd ? './dist' : './public';



module.exports = merge.smart(wp_common, {
  output: {
    path    : path.resolve(__dirname, outDir),
    filename: '[name].[hash].js',
  },
  plugins: wp_plugins(isProd)
});