const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: './dist'
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    }, 
    resolve: {
        extensions: ['.ts', '.js']
    }, 
};    