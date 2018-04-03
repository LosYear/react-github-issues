const webpack = require('webpack');

let config = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: __dirname + '/src',
            }
        ]
    }
};

module.exports = config;