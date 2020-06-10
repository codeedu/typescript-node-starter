const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => ({
  mode: argv.mode === 'development' ? 'development': 'production',
  entry: './frontend/index.ts',
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    publicPath: '/javascripts',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [{
            loader: 'ts-loader',
             options: {
                configFile: path.resolve(__dirname, 'frontend/tsconfig.json')
            }
        }],
        //use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  }
})