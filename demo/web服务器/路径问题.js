const path = require('path');

// const pathStr = path.join('/a', '/b/c');
// console.log(pathStr); // /a/b/c

// const pathStr1 = path.join('/a', '/b/c', '../'); // ../等同于回退一个文件夹
// console.log(pathStr1); // /a/b/

// const pathStr2 = path.join('/a', '/b/c', './d'); // ./d 等同于/d
// console.log(pathStr2); // /a/b/c/d

// 凡事涉及到路径问题，都要使用path.join()方法进行处理，不要使用 + 进行字符串拼接

// path.join()将多个路径结合
const fpath = path.join(__dirname, '/a/b/c/index.html');

// path.basename将文件名解析出来
const fullName = path.basename(fpath);

// path.extname将拓展名解析出来
const ftext = path.extname(fpath);

console.log(fullName); // index.html
console.log(ftext); // .html