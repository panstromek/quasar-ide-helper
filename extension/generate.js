const generate = require('./generators')
const generateCss = require('./generators/css')
const collectApis = require('./utils/collectApis')
const fs = require('fs-extra')

if (fs.existsSync('node_modules/quasar/dist/api')) {
  const apis = collectApis(`node_modules/quasar/dist/api`)
  generate('.', apis)
  generateCss('.')
} else {
  console.error('Can\'t find node_modules and Quasar source, be sure to run this script in a Quasar project folder.')
}