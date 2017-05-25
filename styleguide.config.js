const path = require('path');
const loaders = require('loaders');

module.exports = {
	title         : 'Components Styleguide',
	components    : 'app/components/**/index.jsx',
	template      : path.resolve(__dirname, 'styleguide/template.html'),
	defaultExample: false,
	webpackConfig: {
		// change that to make it generic!!!!
		// module: {
		// 	loaders: loaders.all,
		// },
    entry  : './app/app',
    resolve: {
      extensions: ['.js', '.jsx', '.less'],
      alias     : {
        LESS_conf: path.resolve(__dirname, './app/styles'),

        Main  : path.resolve(__dirname, './app/components/Main'),
        Nav   : path.resolve(__dirname, './app/components/Nav'),

        // UI
        Modal      : path.resolve(__dirname, 'app/components/Modal'),
        Loader     : path.resolve(__dirname, 'app/components/Loader'),
        Link       : path.resolve(__dirname, 'app/components/Link'),
        List       : path.resolve(__dirname, 'app/components/List'),
        ListItem   : path.resolve(__dirname, 'app/components/List/list_item'),
        Rating     : path.resolve(__dirname, 'app/components/Rating'),
        ProgressBar: path.resolve(__dirname, 'app/components/ProgressBar'),
        Panel      : path.resolve(__dirname, 'app/components/Panel'),
        Quote      : path.resolve(__dirname, 'app/components/Quote'),
        Accordion  : path.resolve(__dirname, 'app/components/Accordion'),
        Avatar     : path.resolve(__dirname, 'app/components/Avatar'),
        Gallery    : path.resolve(__dirname, 'app/components/Gallery'),
        Img        : path.resolve(__dirname, 'app/components/Img'),
        Tabs       : path.resolve(__dirname, 'app/components/Tabs'),
        Icon       : path.resolve(__dirname, 'app/components/Icon'),
        
        // Form
        Radio      : path.resolve(__dirname, 'app/components/form/Radio'),
        Checkbox   : path.resolve(__dirname, 'app/components/form/Checkbox'),
        Input      : path.resolve(__dirname, 'app/components/form/Input'),
        Textarea   : path.resolve(__dirname, 'app/components/form/Textarea'),
        Switch     : path.resolve(__dirname, 'app/components/form/Switch'),
        Button     : path.resolve(__dirname, 'app/components/form/Button')
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
              options: { sourceMap: false }
            },{
              loader : "less-loader",
              options: { sourceMap: false }
            }
          ]
        }
      ],
    }
  },
};
