const express = require('express')

const router = express.Router()

router.get('/get', (req, res) => {
  const query = req.query

  res.send({
    status: 0,        // 0 表示处理成功
    msg: 'GET请求成功', // 状态描述
    data: query       // 响应给客户端的数据
  })
})

router.post('/post', (req, res) => {
  const body = req.body

  res.send({
    status: 0, // 0 表示处理成功
    msg: 'POST请求成功', // 状态描述
    data: body // 响应给客户端的数据
  })
})

module.exports = router