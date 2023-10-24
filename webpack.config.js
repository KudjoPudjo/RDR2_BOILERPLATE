const webpack = require('webpack');
const path = require('path');


const buildPath = path.resolve(__dirname, 'dist');

const server = {
    entry: './src/server/server.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[contenthash].server.js',
        path: path.resolve(buildPath, 'server')
    },
    target: 'node',
};

const client = {
    entry: './src/client/client.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[contenthash].client.js',
        path: path.resolve(buildPath, 'client'),
    },
};

module.exports = [server, client];
