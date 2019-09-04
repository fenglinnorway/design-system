const merge = require('webpack-merge');
const path = require('path');
const sass = require('sass');
const base = require('./base.config');

const babelConf = path.resolve(__dirname, './babel.config.js');

module.exports = merge(base, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../build'),
		publicPath: '/',
	},
	devServer: {
		inline: true,
		contentBase: path.resolve(__dirname, '../build'),
		historyApiFallback: true,
		watchContentBase: true,
		port: 3000,
		publicPath: '/',
	},

	resolve: {
		alias: {
			'@atoms': path.resolve(__dirname, '../src/atoms/'),
			'@organisms': path.resolve(__dirname, '../src/organisms/'),
			'@pages': path.resolve(__dirname, '../src/pages/'),
			'@templates': path.resolve(__dirname, '../src/templates/'),
		},
		extensions: ['.jsx', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, '/tests/'],
				use: [
					{
						loader: 'babel-loader',
						options: {
							configFile: babelConf,
						},
					},
				],
			},
			{
				test: /\.scss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: sass,
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
});

exports.aliases = {
	'@atoms': path.resolve(__dirname, '../src/atoms/'),
	'@organisms': path.resolve(__dirname, '../src/organisms/'),
	'@pages': path.resolve(__dirname, '../src/pages/'),
	'@templates': path.resolve(__dirname, '../src/templates/'),
};
