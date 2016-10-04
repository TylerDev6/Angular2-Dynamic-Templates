var webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
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
			},
			{
				test: /\.css$/,
				exclude: helpers.root("src", "app"),
				loader: ExtractTextPlugin.extract("style", "css?sourceMap")
			},
			{
				test: /\.css$/,
				include: helpers.root("src", "app"),
				loader: "raw"
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
