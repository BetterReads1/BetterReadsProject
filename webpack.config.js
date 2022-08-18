const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      // match the output path
      directory: path.resolve(__dirname, 'dist'),
    },
    // fallback to root for other urls
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000/',
      secure: false
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devtool: 'inline-source-map',
}