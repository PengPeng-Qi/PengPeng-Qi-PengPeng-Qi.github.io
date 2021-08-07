const fs = require('fs')

let p = new Promise((resolve, rejects) => {
  fs.readFile('./text.txt', 'utf8', (err, data) => {
    // 如果出错，调用rejects函数并传递错误
    if (err) rejects(err);
    // 如果成功，调用resolve函数并传递数据
    resolve(data);
  })
})

// 调用then方法
p.then(value => {
  // 打印传递的数据
  console.log(value)
}, reason => {
  // 打印
  console.log(reason)
})