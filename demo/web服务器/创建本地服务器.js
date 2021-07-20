// 导入http模块
const http = require('http');
const { url } = require('inspector');

const server = http.createServer();

server.on('request', function(req, res){
  const str = '你的 request ' + req.url + ' Your Menthod is ' + req.method;
  // console.log('Someone Visit Our Web')
  // console.log(str);

  if(req.url === '/' || req.url === '/index.html'){
    content = '<h1>首页</h1>'
  }else if(req.url === '/about.html'){
    content = '<h1>关于页面</h1>'
  }
  console.log(content);
  // 解决格式中文乱码，设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  // res.end()方法向客户端发送指定的内容，并结束这次请求的处理过程
  res.end(content)
})

server.listen(80, function () { 
  console.log('Server running at http://127.0.0.1:80');
 })