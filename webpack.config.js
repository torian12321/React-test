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
      Accordion  : 'app/components/Accordion.jsx'
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
