const glob = require('glob').sync;

module.exports = {
  entry: glob('./src/**/*.vue'),
  filename: {
    js: 'searchcomp.min.js',
  },
  sourceMap: false,
  html: true,
  moduleName: 'SearchComp'
};
