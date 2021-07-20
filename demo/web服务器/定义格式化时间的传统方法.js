const { Model } = require("echarts");

function dataFormat(dtStr) {
  const dt = new Date(dtStr)

  const y = padZero(dt.getFullYear());
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());

  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义补零函数
function padZero(d){
  return d <= 9 ? '0' + d : d
}

module.exports = {
  dataFormat
}