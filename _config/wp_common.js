const
path    = require('path'),
loaders = require('./wp_loaders');

module.exports = {
  entry  : path.resolve(__dirname, '../src'),
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: loaders
  }
};
