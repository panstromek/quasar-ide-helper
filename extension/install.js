/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

const generate = require('./utils/type-generator')
const generateCss = require('./generators/css')
const collectApis = require('./utils/collectApis')
const generateTemplates = require('./generators/templates')

/**
 *
 * @param {{extId, quasarAppVersion, prompts, resolve, appDir}} api
 */
module.exports = function ({ appDir }) {
  generateCss(appDir)
  const apis = collectApis(`${appDir}/node_modules/quasar/dist/api`)
  generate(appDir, apis)
  generateTemplates(apis, appDir)
}
