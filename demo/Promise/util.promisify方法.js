/**
 * util.promisify 方法： 返回一个Promise的版本
 */
//引入 util 模块
const util = require('util');
//引入 fs 模块
const fs = require('fs');
//返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./text.txt', 'utf8').then(value => {
  console.log(value);
});