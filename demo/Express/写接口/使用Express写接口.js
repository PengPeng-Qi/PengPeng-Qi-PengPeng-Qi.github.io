const express = require('express')
// 创建服务器实例
const app = express()

app.use(express.urlencoded({extended: false}))

// 为了防止冲突，需要在cors中间件之前，配置 JSONP接口
app.get('/api/jsonp', (req, res) => {
  // 定义JSONP接口 具体实现过程
  // 1 获取客户端发送过来的回调函数的名字
  const funcName = req.query.callback
  // 2 得到要通过 JSONP 形式发送给客户端的数据
  const data = { name: 'zs', age: 32}
  // 3 根据前两步得到的数据， 拼接出一个函数调用的字符串
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4 把上一步拼接得到的字符串， 响应给客户端的 <script> 标签进行解析执行
  res.send(scriptStr)
})



// 在路由之前，配置cors 这个中间件，从而解决接口跨域的问题
// 解决跨域问题
const cors = require('cors')
app.use(cors())

const router = require('./router')
// 把路由模块，注册到app 上
app.use('/api', router)

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})