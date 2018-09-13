const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[chunkhash].js'
    },
    module: {
        rules: [{
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                        pretty: false
                    }
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'static/'),
            to: path.resolve(__dirname, 'dist/static')
        }])
    ]
};