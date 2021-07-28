// 导入自定义模块
// 均能正常导入
const Hi = require('./被导入模块.js')
// const Hi = require('./被导入模块')

// 此方式不能正常导入
// const Hi = require('被导入模块.js')
// const Hi = require('被导入模块')


console.log(Hi); // { Obj: { name: 'Nibai' } }
console.log(Hi.Obj.name); // Nibai
