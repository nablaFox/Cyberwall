const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const hash = process.env.NODE_ENV === 'production' ? '.[contenthash]' : '';

const conf = {
    entry: './src/main.js',

    output: {
        path: `${ __dirname }/dist`,
        filename: `scripts/[name]${hash}.js`,
        clean: true
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({ 
            filename: `styles/main${hash}.css`
        }),
        new HtmlWebpackPlugin()
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    minSize: 40,
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]|/,
                    name: 'vendors',
                    filename: `scripts/[name]${hash}.js`
                }
            }
        }
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                    ? 'style-loader'
                    : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.mp4$/,
                generator: {
                    filename: 'videos/[contenthash][ext]'
                }
            }
        ]
    }
}

module.exports = conf;