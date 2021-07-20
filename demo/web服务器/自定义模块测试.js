// 此时 自定义模块 与 ./自定义模块 不同
// .js可省略
// 在外界使用require导入一个自定义模块的时候，得到的成员就是那个模块中，通过module.exports指向的对象
const self = require('./自定义模块.js')


console.log('自定义模块测试 ' + self.username);

self.sayHello();
// console.log(module);