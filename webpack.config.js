const path = require('path');
module.exports = {
  module: {
    mode: 'development',
    output: {
      filename: 'webpack.config.js',
    },
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.next\trace$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '.next\trace',
            },
          },
        ],
      },
    ],
  },
};
