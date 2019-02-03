/**
 * @param {String} dir
 * @return {[{name:string, api:Object}]} Array of APis
 */
module.exports = function (dir) {
  return fs
    .readdirSync(`${dir}/node_modules/quasar/dist/api`)
    .filter(name => name.endsWith('.json'))
    .map(name => ({
      name: name.substring(0, name.length - 5),
      api: require(`${`${dir}/node_modules/quasar/dist/api`}/${name}`)
    }))
}
