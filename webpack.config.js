const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.tsx',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
		publicPath: '/',
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.module\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							esModule: true,
							modules: {
								namedExport: false,
								exportOnlyLocals: false,
								localIdentName: '[name]__[local]__[hash:base64:5]',
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							exportType: 'named',
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|webp|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext][query]',
				},
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],

	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},
};
