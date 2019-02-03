/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

const generate = require('./type-generator')
const generateCss = require('./generateCss')
const collectApis = require('./collectApis')
const generateTemplates = require('./generateTemplates')

/**
 *
 * @param {{extId, quasarAppVersion, prompts, resolve, appDir}} api
 */
module.exports = function ({ appDir }) {
  generate(appDir)
  generateCss(appDir)
  const apis = collectApis(`${appDir}/node_modules/quasar/dist/api`)
  generateTemplates(apis)
}
