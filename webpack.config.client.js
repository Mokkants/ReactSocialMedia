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
        path.join(CURRENT_WORKING_DIR, 'client/index.jsx')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/client/build'),
        filename: 'bundle.js',
        publicPath: 'client/build/'
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