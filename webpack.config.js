const path = require('path')
const SetAuthorPlugin = require('./my-plugin/set-author')

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            'presets': ['env']
          }
        }],
      }
    ]
  },

  plugins: [
    new SetAuthorPlugin()
  ]
}