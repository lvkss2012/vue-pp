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

            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "I love dsj",
            filename: "index.html",
            template: "./public/template.html"
        }),
        new VueLoaderPlugin()
    ]
}