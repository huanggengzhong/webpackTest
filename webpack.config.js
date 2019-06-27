const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


// 开始写法是module.export
module.export = {
    mode: 'development',
    // 下面四个是基础配置,记住插件plugins是数组形式哦
    entry: {
        //设置入口文件
        app: './app/js/main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        //配置loaders(作用:不同的文件采用不同的解析器),array类型,里面是对象
        loaders: [
            {
                test: /\.html$/, //表示以.html结尾
                loader: 'html-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'//这里的写法不一样哦,!意思从右到左依次解析(三个都会过一遍)
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Development'
        })
    ],
    output: {
        filename: '[name].min.js',//这里的[name]固定写法,与entry里的app对应
        path: path.resolve(__dirname, 'dist')//path是路径使用前要引入,resolve是相对路径,两个下划线的__dirname是node提供的,它代表当前环境的路径,dist是自己起的名字
    }

}