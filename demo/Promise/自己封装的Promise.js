function Promise(executor) {
  // 添加属性
  this.PromiseState = 'pending'
  this.PromiseResult = null
  // 声明属性
  this.callback = {}

  const that = this
  // resolve函数
  function resolve(data) {
    if (that.PromiseState !== 'pending') return;

    // 1、修改对象的属性(promiseState)
    that.PromiseState = 'fulfilled'
    // 2、设置对象结果值(promiseResult)
    that.PromiseResult = data

    // 调用成功的回调函数
    if (that.callback.onResolved) {
      that.callback.onResolved(data)
    }
  }

  // reject函数
  function reject(data) {
    if (that.PromiseState !== 'pending') return;

    // 1、修改对象的属性(promiseState)
    that.PromiseState = 'rejected'
    // 2、设置对象结果值(promiseResult)
    that.PromiseResult = data

    // 调用失败的回调函数
    if (that.callback.onRejected) {
      that.callback.onRejected (data)
    }
  }

  try {
    // 同步调用 -- 执行器函数
    executor(resolve, reject); // 传递实参和形参
  } catch (e) {
    reject(e)
  }


}

// 添加then 方法
Promise.prototype.then = function (onResolved, onRejected) {
  // 调用回调函数
  if (this.PromiseState == 'fulfilled') {
    onResolved(this.PromiseResult)
  }
  if (this.PromiseState == 'rejected') {
    onRejected(this.PromiseResult)
  }
  // 判断pending状态
  if (this.PromiseState == 'pending') {
    // 保存回调函数
    this.callback = {
      onResolved,
      onRejected
    }
  }
}