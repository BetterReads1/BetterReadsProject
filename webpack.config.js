const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    //filename: 'bundle.js',
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, 'dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },
    proxy: {
      '/api/**': 'http://localhost:3000/',
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
        test:/\.jsx?$/,
        exclude:/node-module/,
        use: {
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react']
            }
        }
      },
      {
        test: /\.css$/i,
        use: [
            "style-loader",
            "css-loader"
          ]
      }, 
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin({
     template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  devtool: 'inline-source-map',
  
}