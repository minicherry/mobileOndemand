const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatDate = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [month, day].map(formatNumber).join('-') 
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//获取几天前或几天后的月日
function getDateStr(today, addDayCount){
  var dd;
  if (today) {
    dd = new Date(today);
  } else {
    dd = new Date();
  }
  dd.setDate(dd.getDate() + addDayCount);//获取AddDayCount天后的日期 
  var m = dd.getMonth() + 1;//获取当前月份的日期 
  var d = dd.getDate();
  if (m < 10) {
    m = '0' + m;
  };
  if (d < 10) {
    d = '0' + d;
  };
  return m + "-" + d;
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  getDateStr: getDateStr,
}
