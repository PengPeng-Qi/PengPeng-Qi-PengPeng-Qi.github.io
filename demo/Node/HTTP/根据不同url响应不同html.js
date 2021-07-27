const http = require('http')

const server = http.createServer()

server.on('request', function (req, res) {
  const url = req.url // 1、获取请求的地址

  let content = '<h1>404 Not Found!</h1>' // 2、设置默认内容为404 ...

  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>' // 3、用户请求的是首页
  } else if (url === '/about.html') {
    content = '<h1>关于页面</h1>' // 4、用户请求的是关于页面
  }

  res.setHeader('Content-Type', 'text/html; charset=utf8') // 5、设置响应头，防止中文乱码
  res.end(content) // 6、把内容发生给客户端
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})