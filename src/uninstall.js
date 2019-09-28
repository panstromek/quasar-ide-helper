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

  const configPath = `${appDir}/webpack.config.js`
  const configExists = fs.existsSync(configPath)
  if (configExists && !fs.readFileSync(configPath).toString().includes('generated-by-ide-helper')) {
    fsExtra.unlinkSync(configPath)
  }
}
