import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfigClient from './../webpack.config.client';

const compile = (app) => {
    if(process.env.NODE_ENV == 'development'){
        const compiler = webpack(webpackConfigClient);
        const middleware = webpackDevMiddleware(compiler,{
            publicPath: webpackConfigClient.output.publicPath
        });
        app.use(middleware);
        app.use(webpackHotMiddleware(compiler));
    }    
}

export default {compile};