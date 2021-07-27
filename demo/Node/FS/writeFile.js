const fs = require('fs');

fs.writeFile('.../我是用fs写的文件.txt', 'Hello, World!', 'utf8', function(err){
  err ? console.log('文件写入失败: ', err) : console.log('文件写入成功');
})