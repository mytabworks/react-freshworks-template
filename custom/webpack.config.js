'use strict';

const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path")

const maindirectory = process.cwd()

module.exports = {
  entry: {
    main: ['@babel/polyfill', `${maindirectory}/src/index.tsx`]
  },
  output: {
    globalObject: 'this',
    path: `${maindirectory}/app/scripts`,
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
    publicPath: './scripts'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      "@app": path.resolve(maindirectory, '/src/app'),
      "@components": path.resolve(maindirectory, '/src/components'),
      "@styles": path.resolve(maindirectory, '/src/assets/styles'),
      "@images": path.resolve(maindirectory, '/src/assets/images'),
      "@utils": path.resolve(maindirectory, '/src/common/utils'),
      "@hooks": path.resolve(maindirectory, '/src/common/hooks'),
      "@services": path.resolve(maindirectory, '/src/services'),
      "@config": path.resolve(maindirectory, '/src/config'),
      "@types": path.resolve(maindirectory, '/src/types'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|test.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name][contenthash:8].[ext]',
              outputPath: '/assets/img',
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff2'
        }
      },
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true,
      dry: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css'
    }),
    new HtmlWebPackPlugin({
      template: `${maindirectory}/public/index.html`,
      filename: `${maindirectory}/app/index.html`
    })
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          chunks: 'all'
        }
      }
    }
  }
};
