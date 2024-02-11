const path = require("path");

module.exports = {
    context: path.resolve("src"),
    entry: {
        index: "./index.js",
        new: "./new.js",
        article: "./article.js",
    },

    output: {
        filename: "./[name].js",
        path: path.resolve("./js/")
    },

    devServer: {
        hot: true,

        static: {
            directory: "./",
            watch: true
        }
    }
}