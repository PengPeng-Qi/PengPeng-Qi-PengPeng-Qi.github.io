/* 封装📦一个函数 mainReadFile 读取文件内容
 * 参数： path 文件路径
 * 返回： Promise对象
 */

/* 封装函数 */
function mainReadFile(path) {
  return new Promise((resolve, reject) => {
    // readfile
    require('fs').readFile(path, 'utf8', (err, data) => {
      // 判断
      if (err) reject(err);
      // 成功
      resolve(data)
    })
  })
}

/* 调用函数 */
mainReadFile('./text.txt').then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})