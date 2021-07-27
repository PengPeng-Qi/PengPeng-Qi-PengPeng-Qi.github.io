const path = require('path');
const fs = require('fs');

const pathRead = path.join(__dirname, '../txt.txt');
fs.readFile(pathRead, 'utf8', function(err, res){
  if (err) {
    return console.log('读取文件失败: ', err);
  }
  console.log(res); 

  console.log(path.basename(pathRead));  // txt.txt
  console.log(path.extname(pathRead));   // .txt
})
