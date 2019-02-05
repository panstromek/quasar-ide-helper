const fsExtra = require('fs-extra')
/**
 * Quasar App Extension uninstall script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/UninstallAPI.js
 */

module.exports = function ({ appDir }) {
  fsExtra.removeSync(`${appDir}/.quasar-ide-helper`)
  fsExtra.removeSync(`${appDir}/.quasar-ide-helper.css`)
  fsExtra.removeSync(`${appDir}/.QuasarLiveTemplates.xml`)
}
