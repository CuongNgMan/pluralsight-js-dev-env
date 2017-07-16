'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = require('../webpack.config.dev');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 9000;
var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpackConfig2.default);
/**
 * webpack-dev-middleware take the above "compiler" as first parameter
*/
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: _webpackConfig2.default.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, '../src/index.html'));
});

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        (0, _open2.default)('http://localhost:' + PORT);
    }
});