"use strict";
const 
path = require('path'),
webpack = require('webpack'),
CURRENT_WORKING_DIR = process.cwd();

module.exports = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/index')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }, plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin()
      ]
}