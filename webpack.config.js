const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/public',
        filename: "./bundle.js"
    },
    devServer: {
        port: 8080,
        contentBase: "./public",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [{
            test: /.js?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets : ["es2015","react"]
            }
        },{
            test: /\.(pdf|jpg|png|gif|svg|ico)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[hash].[ext]",
                    },
                },
            ]
        },{
            test: /\.(sa|sc|c)ss$/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        }]
    }
}