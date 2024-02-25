module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },

        resolve: {
          extensions: ['.js', '.jsx']
        }
      },
      {
        
        test: /\.css$\.js|\.jsx$/, 
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};