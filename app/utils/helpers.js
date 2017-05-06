var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
}

var monthsMap = {
  "0":"January",
  "1":"February",
  "2":"March",
  "3":"April",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"August",
  "8":"September",
  "9":"October",
  "10":"November",
  "11":"December"
}

function getDate (unix){
  var date = new Date(unix * 1000);
  var day = daysMap[date.getDay()];
  var month = `${monthsMap[date.getMonth()]} ${date.getDate()}`;
  return `${day}, ${month}`
}

function convertTemp (kelvin) {
  return (kelvin - 273.15) * 1.8000 + 32.00
}


module.exports = {
  getDate,
  convertTemp
}
