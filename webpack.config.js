const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {   
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },  
      {  
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }   
    ]   
  },  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },  
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },  
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist')
  }
}
