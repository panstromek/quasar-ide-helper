const fs = require('fs')

/**
 * Quasar App Extension uninstall script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/UninstallAPI.js
 */
module.exports = function ({ appDir }) {
  try {
    if (fs.existsSync(`${appDir}/.QuasarLiveTemplates.xml`)) {
      fs.unlinkSync(`${appDir}/.QuasarLiveTemplates.xml`)
    }

    const configPath = `${appDir}/webpack.config.js`
    const configExists = fs.existsSync(configPath)
    if (configExists && !fs.readFileSync(configPath).toString().includes('generated-by-ide-helper')) {
      fs.unlinkSync(configPath)
    }

    if (fs.existsSync(`${appDir}/.quasar-ide-helper`)) {

      if (fs.statSync(`${appDir}/.quasar-ide-helper`).isDirectory()) {
        fs.readdirSync(`${appDir}/.quasar-ide-helper`).forEach(file => {
          fs.unlinkSync(`${appDir}/.quasar-ide-helper/${file}`)
        })
      }

      fs.unlinkSync(`${appDir}/.quasar-ide-helper`)
    }
  } catch (e) {
    console.log('Some generated files/folders were not deleted (Probably a permission error)')
    console.log('They should not cause any problems but you can delete them manually:')
  }
}
