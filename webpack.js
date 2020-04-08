const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        ex1: './site/ex1/ts/calculator.ts',
        ex2: './site/ex2/ts/ex2.ts'
    },
    output: {
        filename: '[name]/Bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'site/',       to: ''}
        ])
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader',
                    options: {onlyCompileBundledFiles: true}
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};

module.exports = config;
