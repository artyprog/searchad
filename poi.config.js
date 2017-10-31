const webpack = require('webpack');
const glob = require('glob').sync;

module.exports = {
  entry: glob('./src/**/SearchAD.vue'),
  filename: {
    js: 'searchad.min.js',
  },
  sourceMap: false,
  html: true,
  moduleName: 'SearchAD'
};
