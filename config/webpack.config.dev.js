const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const path = require('path')
console.log(path.resolve(__dirname, '..', 'src', 'app.tsx'))
const dev = merge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        host: 'localhost',
        port: 8484,
        proxy: {
            '/api': {
                target: 'http://mx.bingkong.ltd:50551/',
            }
        }
    },
})

module.exports = dev