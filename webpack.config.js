module.exports = {
  entry: './app/app',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main  : 'app/components/Main',
      Nav   : 'app/components/Nav',

      // UI
      Modal      : 'app/components/Modal',
      Loader     : 'app/components/Loader',
      Link       : 'app/components/Link',
      Rating     : 'app/components/Rating',
      ProgressBar: 'app/components/ProgressBar',
      Panel      : 'app/components/Panel',
      Quote      : 'app/components/Quote',
      Accordion  : 'app/components/Accordion',
      Card_user  : 'app/components/Card_user',
      Gallery    : 'app/components/Gallery/index',
      Img        : 'app/components/Img',
      Tabs       : 'app/components/Tabs/index',
      
      // Form
      Radio      : 'app/components/form/Radio',
      Checkbox   : 'app/components/form/Checkbox',
      Input      : 'app/components/form/Input',
      TextArea   : 'app/components/form/TextArea',
      Switch     : 'app/components/form/Switch',
      Button     : 'app/components/form/Button'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
