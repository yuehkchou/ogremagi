import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'; //required to work with node
import config from './webpack.config';
import Express from 'express';
import bodyParser from 'body-parser';
import router from './web/router';
// import bodyParser from 'body-parser';


const app = new Express();
const port = 3000;
const compiler = webpack(config);

// bodyParser
app.use(bodyParser.json());

// webpack
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

// Get request at '/'
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
// Handing backend routing
app.use("/api", router);

app.listen(port,error => {
    if (error) {
        console.error(error);
    } else {
        console.log("Listening on port", port)
    }
});
