require('./file')
require('./style/style.scss')



// src/index.js
// 这里我们使用ES6的语法
const arrowFunction = () => {
    console.log('hello');
};

console.log(arrowFunction);
/*
编译之后

// src/index.js
// 这里我们使用ES6的语法
var arrowFunction = function arrowFunction() {
  console.log('hello');
};
debugger;
console.log(arrowFunction);

*/