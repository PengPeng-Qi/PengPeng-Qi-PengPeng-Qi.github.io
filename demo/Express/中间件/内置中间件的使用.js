const express = require('express')

const app = express()

// 通过express.json() 这个中间件， 解析表单中的 JSON格式的数据 
app.use(express.json())
app.post('/user', (req, res) => {
  // req.body 这个属性，接收客户端发送来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body 默认等于undefined
  console.log(req.body) // { name: 'zhangsan', age: 18 }
  res.send('ok')
})

// 通过express.urlencoded() 这个中间件，来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({extends: false}))
app.post('/book', (req, res) => {
  // 在服务器端，可以通过req.body 来获取JSON格式的表单数据和 url-encoded格式的数据
  console.log(req.body) // { bookname: '水浒传', autohr: '施耐庵' }
  res.send('ok')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})