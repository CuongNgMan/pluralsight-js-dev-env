import path from 'path';

export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname,'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname,'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        
    ],
    module: {
        loaders: [
            {test: /\.js$/,loaders: 'babel-loader',exclude: /node_modules/},
            {test: /\.css$/,loaders: ['style','css']}
        ]
    }
}