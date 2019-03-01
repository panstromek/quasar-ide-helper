module.exports.flatter = function (flatten, val) {
  if (Array.isArray(val)) {
    return [...flatten, ...val]
  }
  return [...flatten, val]
}
