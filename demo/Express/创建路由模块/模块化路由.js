const express = require('express')

const app = express()

// 导入自定义模块
const router = require('./router')

// app.use()函数是来注册全局中间件
// 注册路由模块
app.use(router)

// 使用app.use() 注册路由模块，并添加统一的访问前缀 /api
// 同静态资源统一挂载访问前缀一样
// app.use('/api', router)

app.listen(80, () => {
  console.log('http://127.0.0.1')
})