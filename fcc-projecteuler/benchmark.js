module.exports = function (fn, param) {
  let start = new Date()
  fn(param)
  return new Date() - start
}
