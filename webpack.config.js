const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/menu.js', './src/home.js', './src/contact.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};