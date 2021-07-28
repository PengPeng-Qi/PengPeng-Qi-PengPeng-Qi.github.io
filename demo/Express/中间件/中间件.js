const express = require('express')

const app = express()

// 定义中间件函数
// 常量mw 所指向的，就是一个中间件函数
const mw = function (req, res, next) {
  console.log('这是一个简单的中间件函数')
  // 在当前中间件的业务处理完毕后，必须调用next() 函数
  // 表示把流转关系交给下一个 中间件或路由
  next()
}

// 将mw注册为 全局生效的中间件
app.use(mw)

// 简写形式
// app.use(function (req, res, next) {
//   console.log('这是一个简单的中间件函数')
//   next()
// })


// 路由需要放在中间件下面，才能每次访问时重新经过中间件
app.get('/', (req, res) => {
  res.send('Home Page.')
})

app.post('/user', (req, res) => {
  res.send('User Page.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})