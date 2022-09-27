const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 1,
  entry: {
    'js/app': ['./src/App.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'docs/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader'],
        exclude: /node_modules/,
},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};