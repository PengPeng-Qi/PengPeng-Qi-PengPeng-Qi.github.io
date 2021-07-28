// 1、导入 express
const express = require('express')

// 2、创建web 服务器
const app = express()


// 监听get请求
app.get('/user', function(req, res){  
  // 向客户端发送 JSON 对象
  res.send({name: 'zs', age: 20, gender: '男'})
})

// 获取参数
app.get('/', (req, res) => {
  // req.query 默认是一个空对象
  // 客户端使用 ?name=zs&age=20 这种查询字符串方式，发送到服务器的参数
  // 可以通过req.query 对象访问到，例如：
  // req.query.name req.query.age
  console.log(req.query)
  res.send(req.query)
})

// 获取动态参数
app.get('/user/:id', (req, res) => {
  // req.params 是动态匹配到的URL 参数，默认也是一个空对象
  // 当输入/user/1 时， 返回的就是{ "id": "1" }
  console.log(req.params)
  res.send(req.params)
})

// 监听post请求
app.post('/user', function(req, res){
  // 向客户端发送文本内容
  res.send('请求成功')
})
  
// 3、调用 app.listen(端口号，启动成功后的回调函数),启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})
  