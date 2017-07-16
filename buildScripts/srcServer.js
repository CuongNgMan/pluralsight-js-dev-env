import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';


const PORT = 9000;
const app = express();
const compiler = webpack(config);
/**
 * webpack-dev-middleware take the above "compiler" as first parameter
*/
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'../src/index.html'));
});

app.listen(PORT, (err) => {
    if(err) {
        console.log(err)
    }else{
        open('http://localhost:'+PORT);
    }
});
