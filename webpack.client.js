var webpack = require("webpack");
var path = require("path");

module.exports = {
	target:  "web",
	cache:   false,
	context: __dirname,
	devtool: false,
	entry:   ["./src/client"],
	output:  {
		path:          path.join(__dirname, "static/dist"),
		filename:      "client.js",
		chunkFilename: "[name].[id].js",
		publicPath:    "dist/"
	},
	plugins: [
		new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
		new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	module:  {
		//loaders: [
			//{test: /\.json$/, loaders: ["json"]},
			//{include: /\.js$/, loaders: ["babel-loader?stage=0&optional=runtime"], exclude: /node_modules/}
			// {test: /\.js$/, loaders: ["babel?cacheDirectory&presets[]=es2015&presets[]=react&presets[]=stage-0"], exclude: /node_modules/}
		//],
		loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?experimental&stage=0"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ],
		postLoaders: [],
		noParse: /\.min\.js/
	},
	resolve: {
		alias: {
			react: path.join(__dirname, "node_modules/react")
		},
		modulesDirectories: [
			"src",
			"node_modules",
			"web_modules"
		],
		extensions: ["", ".json", ".js"]
	},
	
	node:    {
		__dirname: true,
		fs:        'empty'
	}
};
