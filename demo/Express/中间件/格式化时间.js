function dataFormat(str) {
  const min = new Date(str);

  // console.log(min); //2021-07-28T01:38:44.689Z

  const YY = padZero(min.getFullYear());
  const MM = padZero(min.getMonth() + 1);
  const DD = padZero(min.getDate());

  const HH = padZero(min.getHours());
  const Min = padZero(min.getMinutes());
  const sec = padZero(min.getSeconds());

  return `${YY}:${MM}:${DD} ${HH}:${Min}:${sec}`
}
// 补零
function padZero(d) {
  return d > 9 ? d : '0' + d;
}

module.exports = {
  dataFormat
}