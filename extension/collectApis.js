/**
 * @param {String} dir
 * @return {Array}
 */
module.exports = function (dir) {
  const apiPath = `${dir}/node_modules/quasar/dist/api`
  const apis = fs.readdirSync(apiPath)
  return apis.map(name => {
    const api = require(`${apiPath}/${name}`)
    if (name.endsWith('.json')) {
      name = name.substring(0, name.length - 5)
    }
    return {
      name,
      api
    }
  })
}
