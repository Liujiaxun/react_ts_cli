const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const GetPlugins = require('../lib/plugins')
console.log(path.resolve(__dirname, '..', 'src', 'app.tsx'))
module.exports = {
    entry: [path.resolve(__dirname, '..', 'src', 'app.tsx')],
    output:{
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: 'static/js/[name].js',
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    // options: {
                    //     minimize: true
                    // }
                }, 'postcss-loader', 'sass-loader']
            })
        }, {
            test: /\.html$/,
            loader: 'html-loader?attrs=img:src img:data-src',
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?limit=1024&name=static/fonts/[name].[ext]'
        }, {
            test: /\.js$/,
            use: ['babel-loader', 'source-map-loader'],
            exclude: /node_modules/
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    plugins: new GetPlugins(),
    node: {
        fs: 'empty'
    },

}