// const Timer = require('./格式化时间')
const express = require('express')

const app = express()

// 简写形式
app.use(function (req, res, next) {
  // console.log(Timer.dataFormat(new Date()));
  // console.log('经过第一个中间件的时间为：', Timer.dataFormat(new Date()))
  const time = Date.now()
  req.startTime = time
  next()
})

// 路由需要放在中间件下面，才能每次访问时重新经过中间件
app.get('/', (req, res) => {
  res.send('Home Page.' + req.startTime)
})

app.post('/user', (req, res) => {
  res.send('User Page.'+ req.startTime)
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
