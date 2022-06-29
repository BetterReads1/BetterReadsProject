const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  // entry: path.join(__dirname, "client", "index.js"),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },


  plugins: [  
    new HtmlWebpackPlugin({
     template: './client/index.html',
    //  template: path.join(__dirname, "client", "index.html"),
    }),
  ],



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
    // proxy: {
    //   '/api/**': 'http://localhost:3000/',
    // },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      // {
      //   test: /\.svg$/i,
      //   issuer: /\.[jt]sx?$/,
      //   use: ['@svgr/webpack'],
      // },
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // test: /\.s[ac]ss$/i,
        // test: /\.s[ac]ss$/i,
        test: /\.(s?(a|c)ss)$/i,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              postcssOptions: {
                plugins: function () {
                  // post css plugins, can be exported to postcss.config.js
                  return [require('precss'), require('autoprefixer')];
                },
              },
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_module/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ['@babel/preset-env', '@babel/preset-react']
  //         },
  //       }
  //     },
  //     {
  //       test:/\.jsx?$/,
  //       exclude:/node-module/,
  //       use: {
  //           loader:'babel-loader',
  //           options:{
  //               presets:['@babel/preset-env', '@babel/preset-react']
  //           }
  //       }
  //     },
  //     {
  //       test: /\.css$/i,
  //       use: [
  //           "style-loader",
  //           "css-loader"
  //         ]
  //     }
  //   ]
  // },
  devtool: 'inline-source-map',
  
}