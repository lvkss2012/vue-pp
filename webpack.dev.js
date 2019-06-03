const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    // model: 'develop',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
})