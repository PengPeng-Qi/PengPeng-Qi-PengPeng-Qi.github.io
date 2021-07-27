// 导入http模块
const http = require('http')

// 创建web服务器实例
const server = http.createServer()

// 为服务器实例绑定request事件,即可监听客户端发送过来的网络请求
server.on('request', (req, res) => {
  // 只要有客户端来请求我们自己的服务器，就会触发request事件，从而调用这个事件处理函数
  // req 是请求对象，包含了与客户端相关的属性和数据
  // req.url 是客户端请求的URL 地址
  // req.method 是客户端的method 请求类型
  const str = `你请求 url is ${req.url}, and request method is ${req.method}`
  console.log(str)

  // res 是响应对象，它包含了与服务器相关的数据和属性，例如：
  // 为了防止中文显示乱码的问题，需要设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf8')

  // res.end()方法向客户端发生知道内容，并结束这次请求的处理过程
  res.end(str);
})

// 调用server.listen(端口号, cd回调) 方法， 即可启动web 服务器
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})