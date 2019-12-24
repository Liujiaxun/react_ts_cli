const path = require('path');
const webpack = require('webpack');
const __DEV__ = process.env.NODE_ENV !== 'production';
/**
 * extract-text-webpack-plugin插件
 * TODO: 将样式提取到单独的css文件中不将css打包到js中
 */
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
/**
 * html-webpak-plugin插件，生成html插件
 * TODO: https://www.npmjs.com/package/html-webpack-plugin
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * clean-webpack-plugin插件
 * TODO: 热更新删除打包的文件
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
 
/**
 * TODO: getPlugins
 */
class getPlugins {
    constructor() {
        var plugins = [
            new webpack.optimize.RuntimeChunkPlugin({
                name: "manifest"
            }),
            new ExtractTextWebpackPlugin('static/css/[name].css'),
            new HtmlWebpackPlugin({
                favicon: path.join(__dirname,'..', 'public/static', 'favicon.ico'),
                filename: 'index.html',
                template:path.join(__dirname,'..','public', 'index.html'),
                inject: 'body',
                hash: true,
                chunks: ['main', 'manifest', 'vendor'],
                minify: {
                    removeComments: true,
                    collapseWhitespace: false
                }
            }),
            new webpack.HotModuleReplacementPlugin(),
        ];
        if (!__DEV__) {
            plugins.push(new CleanWebpackPlugin('dist/', {
                root: path.join(__dirname, '..'),
                verbose: true,
                dry: false
            }));
        }
        return plugins;
    }
}
 
 
module.exports = getPlugins;