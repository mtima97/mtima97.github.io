module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: 'file-loader'
            }
        ]
    },
    devtool: "source-map"
}