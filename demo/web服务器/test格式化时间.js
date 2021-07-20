const TIME = require('./定义格式化时间的传统方法')

const dt = new Date()

const newT = TIME.dataFormat(dt);
console.log(newT)