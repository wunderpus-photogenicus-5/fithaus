const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: process.env.NODE_ENV,
  entry: "/client/App.js",
  output: { 
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js" 
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
			{
				test: /\.(sa|sc|c)ss$/i,
				exclude: /node_modules/,
				use: [
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			}
    ],
  },
	plugins: [
		new HtmlWebPackPlugin({
			template: "./client/index.html",
		}),
	],
	devServer: {
		static: {
			//directory: path.resolve(__dirname, 'build'),
			publicPath: '/build',
		},
	}
};