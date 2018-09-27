const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    devServer: {
        clientLogLevel: 'warning',
        open: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpe?g|png|svg|webp)$/,
                loader: 'file-loader'
            }
        ]
    }
});