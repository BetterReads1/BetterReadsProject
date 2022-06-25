const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
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
      test: /\.s[ac]ss$/i,
      use: [
          "style-loader",
          "css-loader",
          "sass-loader",
       ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin({
     template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  devtool: 'inline-source-map',
  
};