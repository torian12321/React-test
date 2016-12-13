module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main  : 'app/components/Main.jsx',
      Nav   : 'app/components/Nav.jsx',
      Loader     : 'app/components/Loader.jsx',
      Link       : 'app/components/Link.jsx',
      Rating     : 'app/components/Rating.jsx',
      ProgressBar: 'app/components/ProgressBar.jsx',
      Panel      : 'app/components/Panel.jsx',
      Quote      : 'app/components/Quote.jsx',
      Accordion  : 'app/components/Accordion.jsx',
      Card_user  : 'app/components/Card_user.jsx',
      Toast      : 'app/components/Toast.jsx',
      Gallery    : 'app/components/Gallery/index.jsx',
      Tabs       : 'app/components/Tabs/index.jsx',
      Radio      : 'app/components/form/Radio.jsx',
      Checkbox   : 'app/components/form/Checkbox.jsx',
      Input      : 'app/components/form/Input.jsx',
      Switch     : 'app/components/form/Switch.jsx',
      Button     : 'app/components/form/Button.jsx'
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
