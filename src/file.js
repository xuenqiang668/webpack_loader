const res = require('./assets/IMG_7630.jpg')

 // 创建一个 img 元素
 const img = document.createElement('img');

 // 设置 img 的属性
 img.src = res; // 替换为您想要的图片 URL
 img.alt = '示例图片'; // 设置 alt 属性
 img.width = 150; // 设置宽度
 img.height = 150; // 设置高度

 // 将 img 元素添加到 DOM 中
 const container = document.getElementById('image-container');
 container.appendChild(img);