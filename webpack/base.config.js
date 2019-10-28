const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const paths = {
	APP_DIR: path.resolve(__dirname, '..', 'src'),
};

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

module.exports = {
	entry: ['./src/index.jsx'],
	resolve: {
		alias: {
			'@atoms': path.resolve(paths.APP_DIR, 'atoms/'),
			'@molecules': path.resolve(paths.APP_DIR, 'molecules/'),
			'@organisms': path.resolve(paths.APP_DIR, 'organisms/'),
			'@pages': path.resolve(paths.APP_DIR, 'pages/'),
			'@templates': path.resolve(paths.APP_DIR, 'templates/'),
			'@public': path.resolve(__dirname, '..', 'public'),
		},
		extensions: ['.jsx', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.DefinePlugin(envKeys),
	],
};

exports.aliases = {
	'@atoms': path.resolve(paths.APP_DIR, 'atoms/'),
	'@molecules': path.resolve(paths.APP_DIR, 'molecules/'),
	'@organisms': path.resolve(paths.APP_DIR, 'organisms/'),
	'@pages': path.resolve(paths.APP_DIR, 'pages/'),
	'@templates': path.resolve(paths.APP_DIR, 'templates/'),
	'@public': path.resolve(__dirname, '..', 'public'),
};