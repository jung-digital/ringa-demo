'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: 'http://demo.ringajs.com/assets/'
  },
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.API_ROOT': '"http://example-server.ringajs.com"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true,
      mangle: {
        except: ["$controller","$customEvent","$detail","$lastEvent","$lastPromiseError","$lastPromiseResult","$ringaEvent","$target","$thread","APIController","AppController","AppModel","AppModel1","EventExecutor","ForEachExecutor","FunctionExecutor","IifExecutor","IntervalExecutor","Item","List","ModelWatcher","PopupLoadingController","PopupLoadingModel","PopupLoadingModel1","PopupLoadingModel2","RingaEvent","Thread","ThreadFactory","_executor","appModel","autoEdit","bodyParam","done","fail","idParam","item","itemIds","list","listId","lists","message","popupLoadingModel","popupModel","requireCatch","ringaEvent","someProperty","url", "ix"]
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

config.module.rules.push({
  test: /\.(js|jsx)$/,
  include: path.join(__dirname, '/../src'),
  use: [
    'babel-loader'
  ]
});

module.exports = config;
