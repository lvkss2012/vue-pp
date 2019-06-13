const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//vue-loader 15以上版本报错，you should add VueLoaderPlugin like this in your webpack config， https://github.com/symfony/webpack-encore/issues/311
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /^node_modules$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    {loader: "file-loader"}
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {loader: "file-loader"}
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "I love U",
            filename: "index.html",
            template: "./public/template.html"
        }),
        new VueLoaderPlugin()
    ]
}