const path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
};