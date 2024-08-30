const core = require('@babel/core')

function babelLoader(source, sourceMap, meta) {
    // 获取loader参数
    const options = this.getOptions() || {};
    // 生成babel转译阶段的sourcemap
    options.sourceMaps = true;
    // 保存之前loader传递进入的sourceMap
    options.inputSourceMap = sourceMap;
    console.log(this.request);
    // 获得处理的资源文件名 babel生成sourcemap时候需要配置filename
    options.filename = this.request.split('!').pop().split('/').pop();
    // 通过transform方法进行转化
    const { code, map, ast } = core.transform(source, options);
    console.log(map, 'map');
    // 调用this.callback表示loader执行完毕
    // 同时传递多个参数给下一个loader
    // 将transform API生成的sourceMap 返回给下一个loader(或者webpack编译阶段)进行处理
    this.callback(null, code, map, ast);

}

module.exports = babelLoader;