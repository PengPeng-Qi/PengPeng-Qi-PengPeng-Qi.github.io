// 导入需要的模块
const fs = require('fs');

// 读取原文件
fs.readFile('./files/成绩.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log('文件读取失败' + err);
  }
  // console.log('文件读取成功：' + data);
  // console.log(data);

  // 转换为数组
  const date = data.split(' ');
  // console.log(date);

  // 转换数组中=与：
  const arrNew = [];
  date.forEach(item => {
    arrNew.push(item.replace('=', '：'));
  })
  // console.log(arrNew);

  // 转换为新字符串
  const newStr = arrNew.join('\n')
  // console.log(newStr);

  // 写入新txt文件
  fs.writeFile(__dirname + '/files/成绩OK.txt', newStr, function (err) {
    if (err) {
      return console.log('文件写入失败' + err.message)
    }
    console.log('文件处理成功');
  })

})