module.exports = {
  toKebab (i) {
    return i.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase()
  },
  toCamel (i) {
    return i.replace(/-([a-z])/g, c => c[1].toUpperCase())
  }
}