const path = require('path');

module.exports = [
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
                options: { sourceMap: process.env.NODE_ENV === 'development' }
            },{
                loader : "less-loader",
                options: { sourceMap: process.env.NODE_ENV === 'development' }
            }
        ]
    }
];