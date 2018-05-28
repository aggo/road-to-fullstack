const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        // new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),  // deletes the content of dist when building
        new HtmlWebpackPlugin({            // will bundle the js stuff and add the import to index.html (index.html doesn't have any js stuff initially)
            template: './index.html',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // module: {
    //     loaders: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             loader: 'babel-loader',
    //             query: {
    //                 presets:[ 'es2015', 'react', 'stage-2' ]
    //             }
    //         }
    //     ]
    // }
};
