// 每一个loader文件中都存在对应的 normal loader和 pitch loader
// normal loader中打印一句 文件名: normal 和 对应的接受参数
// pitch loader 中打印一句 文件名 pitch
function loader(source) {
    console.log('pre1: normal', source);
    return source + '//pre1';
  }
  
  loader.pitch = function () {
    console.log('pre1 pitch');
  };
  
  module.exports = loader;
  