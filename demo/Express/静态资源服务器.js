// 导入express
const express = require('express')

// 创建web 服务器
const app = express()

// 调用express.static(文件名)方法，快速对外 提供静态资源
// app.use(express.static('./public'))
// 访问时路径中不用写./public，
// 直接访问：http://127.0.0.1/index.html

app.use('/public', express.static('./public'))
// 访问时路径中可以加上/public，
// 访问：http://127.0.0.1/public/index.html

// 若需要托管多个静态资源目录，可以多次调用 express.static
// express.static() 函数会根据目录的添加顺序查找所需的文件。显示第一个托管的文件

// 启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})