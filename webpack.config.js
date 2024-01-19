// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/components/ScreenRecorder.js', // Adjust path to your entry file
  output: {
    filename: 'ScreenRecorder.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
