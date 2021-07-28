const express = require('express')

const app = express()

app.get('/', (req, res) => {
  throw new Error('服务器内部发送错误') // 抛出一个自定义的错误
  res.send('Home Pages.') // 当发生错误时，后面就不执行了
})

// 错误级别的中间件，当发生错误时，捕获发送的异常信息，从而阻止程序的崩溃
app.use((err, req, res, next) => {
  // 在服务器打印错误信息
  console.log('发生了错误: ' + err.message)
  // 向客户端打印错误信息
  res.send('Error! ' + err.message)
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})