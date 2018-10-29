const webpack = require('webpack');
var glob = require("glob");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'stage-0'],
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                include: /\.min\.js$/
            })
        ]
    }
}

const mainConfig = Object.assign({}, baseConfig, {
    entry: {
        "pagewheelz": "./entry.js",
        "pagewheelz.min": "./entry.js",
    },
    output: {
        path: __dirname + "/dist/",
        library: "PageWheelz",
        libraryTarget: "umd",
        filename: "[name].js",
    },
});

module.exports = mainConfig;
