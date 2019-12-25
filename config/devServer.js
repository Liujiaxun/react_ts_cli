const Webpack = require('webpack')
const Express = require('express')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevConfig = require('./webpack.config.dev')
const config = require('./config')

const app = Express()
const compiler = Webpack(webpackDevConfig)

app.use(WebpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: {
        colors: true
    },
    lazy: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true,
    }
}))

app.use(WebpackHotMiddleware(compiler))

// app.get('/', function(req, res){
//     res.sendFile(__dirname+'/build/index.html')
// })

app.listen(config.port, '' , function(){
    console.log('open http://localhost:' + config.port)
})