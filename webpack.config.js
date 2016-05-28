module.exports = {
  entry: './app/App.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devtool: '#cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
