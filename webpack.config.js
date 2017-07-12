const
webpack     = require('webpack'),
merge       = require('webpack-merge'),
path        = require('path'),
ExtractTextPlugin = require("extract-text-webpack-plugin");


const
common = function(sourceMap = true){
  let
  conf = {
    entry  : './app/app',
    resolve: {
      extensions: ['.js', '.jsx', '.less'],
      alias     : {
        // 'react': 'preact-compat',
        // 'react-dom': 'preact-compat',
        // // Not necessary unless you consume a module using `createClass`
        // 'create-react-class': 'preact-compat/lib/create-react-class',

        LESS_conf: path.resolve(__dirname, './app/styles'),

        Main  : path.resolve(__dirname, './app/components/Main'),
        Nav   : path.resolve(__dirname, './app/components/Nav'),

        // UI
        Modal      : path.resolve(__dirname, 'app/components/Modal'),
        Loading    : path.resolve(__dirname, 'app/components/Loading'),
        Link       : path.resolve(__dirname, 'app/components/Link'),
        List       : path.resolve(__dirname, 'app/components/List'),
        ListItem   : path.resolve(__dirname, 'app/components/List/list_item'),
        Rating     : path.resolve(__dirname, 'app/components/Rating'),
        ProgressBar: path.resolve(__dirname, 'app/components/ProgressBar'),
        Message    : path.resolve(__dirname, 'app/components/Message'),
        Quote      : path.resolve(__dirname, 'app/components/Quote'),
        Accordion  : path.resolve(__dirname, 'app/components/Accordion'),
        Avatar     : path.resolve(__dirname, 'app/components/Avatar'),
        Gallery    : path.resolve(__dirname, 'app/components/Gallery'),
        Img        : path.resolve(__dirname, 'app/components/Img'),
        Tabs       : path.resolve(__dirname, 'app/components/Tabs'),
        Icon       : path.resolve(__dirname, 'app/components/Icon'),
        IconBtn    : path.resolve(__dirname, 'app/components/IconBtn'),
        Table      : path.resolve(__dirname, 'app/components/Table'),
        Panel      : path.resolve(__dirname, 'app/components/Panel'),
        
        // Form
        Radio      : path.resolve(__dirname, 'app/components/form/Radio'),
        Checkbox   : path.resolve(__dirname, 'app/components/form/Checkbox'),
        Input      : path.resolve(__dirname, 'app/components/form/Input'),
        Textarea   : path.resolve(__dirname, 'app/components/form/Textarea'),
        Switch     : path.resolve(__dirname, 'app/components/form/Switch'),
        Button     : path.resolve(__dirname, 'app/components/form/Button'),
        Range      : path.resolve(__dirname, 'app/components/form/Range'),

        // Helpers
        Lorem      : path.resolve(__dirname, 'app/components/helpers/Lorem')
      }
    },
    module: {
      loaders: [
        { test: /\.(jsx|js)$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: {presets: ['react', 'es2015', 'stage-1']}},
        { test: /\.(woff|woff2)$/, loader:'url-loader?prefix=font/&limit=5000' },
        { test: /\.(ttf|otf)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.(mp3|wav)$/, loader: 'url-loader?limit=1' },
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=25000' },
        // {
        //   test: /\.css$/,
        //   use: [ 'style-loader', 'css-loader' ]
          // use:[
          //   {loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'}
          // ]


      //     use: [
      //       {loader: 'style?sourceMap'},
      //       {loader: 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'}        
      // ]
        {
          test: /\.(css|less)$/,
          use: [
            {
              loader: "style-loader"
            },{
              loader : "css-loader",
              options: { sourceMap: sourceMap }
            },{
              loader : "less-loader",
              options: { sourceMap: sourceMap }
            }
          ]
        }
      ],
    }
  };
  return conf;
},


export_default = merge(common(), {
  output: {
    path    : __dirname,
    filename: './public/bundle.js'
  }
}),


export_production = merge.smart(common(sourceMap = false), {
  output: {
    path    : __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    // loaders: [
    //   {
    //     test: /\.(css|less)$/,
    //     use: ExtractTextPlugin.extract({
    //       fallback: "style-loader",
    //       use: [
    //         { loader: "css-loader" },
    //         { loader: "less-loader"}
    //       ]
    //     })
    //   }
    // ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
  //  new ExtractTextPlugin("./dist/styles_comp.css"),
  //   new ExtractTextPlugin({
  //     filename: "[name].[contenthash].css",
  //     disable: process.env.NODE_ENV === "development"
  // })
    ]
});


module.exports = function(env) {
  if(env === 'prod'){
    return export_production;
  }else{
    return export_default;
  }
}

module.exports.common = common;