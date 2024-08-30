const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    // 入口文件
    entry: './src/index.js',
    // resolveLoader: {
    //     modules: [ path.resolve(__dirname,'loaders/') ]
    // },

    // 输出配置
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出路径
        clean: true, // 每次构建前清除旧的输出目录
    },

    // 模块加载规则
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: 'pre.js',
            //     enforce: 'pre',
            // },
            // {
            //     test: /\.js$/,
            //     loader: 'normal.js',
            // },
            // {
            //     test: /\.js$/,
            //     enforce: 'post',
            //     use: [
            //         {
            //             loader: 'post.js',
            //             options: {
            //                 name: 'post options'
            //             }
            //         }
            //     ] 
            // },
            // {
            //     test: /\.jpg$/,
            //     loader: path.resolve(__dirname, 'loaders/file-loader.js')
            // },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: path.resolve(__dirname, 'loaders/url-loader.js'),
                        options: {
                            limit: 100000 * 1024
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        // loader: 'style-loader'
                        loader: path.resolve(__dirname, 'loaders/style-loader.js')
                    },
                    // {
                    //     loader: 'css-loader'
                    // },
                    {
                        loader: path.resolve(__dirname, 'loaders/sass-loader.js')
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: path.resolve(__dirname, 'loaders/babel-loader.js'),
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ],
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 生成 HTML 文件的模版
        }),
    ],

    // 开发服务器设置
    devServer: {
        static: './dist', // 静态文件目录
        port: 3000, // 端口号
    },
    devtool: 'source-map',
    // 模式
    mode: 'development', // 开发模式，也可以使用 'production' 进行生产打包
};
