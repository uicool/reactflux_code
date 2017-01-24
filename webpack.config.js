/**
 * Created by jfeng on 9/20/16.
 */
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/index.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },

            // LESS
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },

            // SASS
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },

            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }
        ]
    },


    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};