/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

const { generateIfNeeded } = require('./generators/common')
/**
 *
 * @param {InstallAPI} api
 */
module.exports = function (api) {
  generateIfNeeded(api, api.appDir)
}
