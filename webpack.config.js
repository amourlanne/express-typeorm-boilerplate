const path = require('path');

module.exports = {
  entry: './src/server.ts',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'ts-loader',
        },
      },
    ]
  }
};
