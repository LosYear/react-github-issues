const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let config = {
    mode: 'development',
    entry: {
        app: ['babel-polyfill',
            './src/index.jsx'
        ]
    },
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        hot: true,
        contentBase: './public'
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};

module.exports = config;