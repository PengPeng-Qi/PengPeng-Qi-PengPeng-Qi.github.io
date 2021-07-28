const express = require('express')

const app = express()

// 定义中间件函数 mw1
const mw1 = function(req, res, next){
  console.log('调用了第一个局部中间件')
  next()
}
const mw2 = function(req, res, next){
  console.log('调用了第二个局部中间件')
  next()
}

// 创建路由
// 第一种方式
// app.get('/', mw1, mw2, (req, res) => {
//   res.send("Home Page.") // 只有这个路由会调用中间件
// })
// 第二种方式
app.get('/',[mw1, mw2], (req, res) => {
  res.send("Home Page.") // 只有这个路由会调用中间件
})

app.get('/user', (req, res) => {
  res.send("User Page.")
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})