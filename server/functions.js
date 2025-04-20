
exports.unixToDateTimeConverter = (unix = Date.now()) => {
  const date = new Date(unix)
  return {
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    day: date.getDate().toString().padStart(2, '0'),
    hour: date.getHours().toString().padStart(2, '0'),
    min: date.getMinutes().toString().padStart(2, '0'),
    sec: date.getSeconds().toString().padStart(2, '0')
  }
}