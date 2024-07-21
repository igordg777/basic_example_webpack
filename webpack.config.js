const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        // mode: 'production',
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.js'),

        // entry: {
        //     first_result: path.resolve(__dirname, 'src', 'index.js'),
        //     second_result: path.resolve(__dirname, 'src', 'index2.js')
        // },
        output: {
            // filename: 'bundle.js',
            filename: 'bundle.[contenthash].js',

            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
            }),
        ],
        devServer: {
            port: 3021,
            static: path.resolve(__dirname, 'dist'),
        },
    }
};
