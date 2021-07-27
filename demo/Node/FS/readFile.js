const fs = require('fs');

fs.readFile('../txt.txt', 'utf8', function(err, res){
  if (err) {
    return console.log('读取信息失败', err);
  };
  console.log(res);
})

console.log(__dirname); // 可显示此文件存放的位置