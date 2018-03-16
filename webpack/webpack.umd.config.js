var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../output'),
    filename: 'bundle.min.js',
    libraryTarget: 'umd',
    library: 'eureka',
    umdNamedDefine: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  ],

  externals: [{
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: ['react'],
			amd: 'react',
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: ['react-dom'],
			amd: 'react-dom',
		}
	}]
}
