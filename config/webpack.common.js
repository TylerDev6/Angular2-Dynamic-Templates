var webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	helpers = require("./helpers");

module.exports = {
	entry: {
		app: "./src/main.ts",
		vendor: "./src/vendor.ts",
		polyfills: "./src/polyfills.ts"
	},
	
	resolve: {
		extensions: ["", ".js", ".ts"]
	},
	
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts"
			},
			{
				test: /\.html$/,
				loader: "html"
			}
		]
	},
	
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ["app", "vendor", "polyfills"]
		}),
		
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	]
}
