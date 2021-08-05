/* 自定义Ajax的基本使用 */
/* PengPengQ({
 *   method: '请求类型',
 *   url: '请求地址',
 *   data: { 请求参数对象 },
 *   success: function(res){ // 成功的回调函数
 *     console.log(res)      // 打印数据
 *   }
 * })
 */

// 自己封装AJAX函数
// 处理数据，得到参数数据
function resolveData(data) {
  var arr = [];
  for (k in data){
    arr.push(k + '=' + data[k])
  }
  return arr.join('&');
}

// xhr五个步骤
function PengPengQ(option){
  var xhr = new XMLHttpRequest();

  /* 拼接查询字符串 */
  var qs = resolveData(option.data);

  // xhr.open('GET', '');
  if (option.method.toUpperCase() === 'GET') {
    xhr.open('GET', option.url + '?' + qs);
    xhr.send();
  }else if (option.method.toUpperCase() === 'POST') {
    xhr.open('POST', option.url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(qs);
  }

  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      /* 将接收的JSON数据格式化为字符串 */
      var respon = JSON.parse(xhr.responseText);
      option.success(respon);
    }
  }
}
