"use strict";
const 
path = require("path"),
CURRENT_WORKING_DIR = process.cwd();

module.exports = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, 'client/index.jsx')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: "/dist/"
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
    }
}