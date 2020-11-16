const path = require('path');


module.exports = {
  context: __dirname,
  entry: './frontend/entry',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};




Package.json 
    "webpack": "webpack --mode=development --watch"