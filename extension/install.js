/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

const generate = require('./generators')
const generateCss = require('./generators/css')
const collectApis = require('./utils/collectApis')
const generateTemplates = require('./generators/templates')

/**
 *
 * @param {{extId, quasarAppVersion, prompts, resolve, appDir}} api
 */
module.exports = function ({ appDir, extendPackageJson }) {
  const apis = collectApis(`${appDir}/node_modules/quasar/dist/api`)
  generate(appDir, apis)
  generateCss(appDir)
  generateTemplates(apis, appDir)

  extendPackageJson({
    scripts: {
      'ide-helper:generate': 'node node_modules/quasar-app-extension-ide-helper/generate',
      'ide-helper:templates': 'node node_modules/quasar-app-extension-ide-helper/templates',
    }
  })
}