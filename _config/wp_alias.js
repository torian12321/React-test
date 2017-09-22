const path = require('path');

module.exports = {
  // 'react': 'preact-compat',
  // 'react-dom': 'preact-compat',
  // // Not necessary unless you consume a module using `createClass`
  // 'create-react-class': 'preact-compat/lib/create-react-class',

  LESS_conf: path.resolve(__dirname, '../src/styles'),

  Main  : path.resolve(__dirname, '../src/components/Main'),
  Nav   : path.resolve(__dirname, '../src/components/Nav'),

  export: path.resolve(__dirname, '../export'),
  
  // Helpers
  Lorem    : path.resolve(__dirname, '../src/components/helpers/Lorem')
};