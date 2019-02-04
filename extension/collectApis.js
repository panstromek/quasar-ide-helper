const fs = require('fs')

/**
 * @param {String} dir
 * @return {[{name:string, api:Object}]} Array of APis
 */
module.exports = function (dir) {
  return fs
    .readdirSync(dir)
    .filter(name => name.endsWith('.json'))
    .map(name => ({
      name: name.substring(0, name.length - 5),
      api: require(`${dir}/${name}`)
    }))
}
