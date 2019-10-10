/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

const { generateIfNeeded } = require('./generators/common')
const fs = require('fs')
/**
 *
 * @param {InstallAPI} api
 */
module.exports = function (api) {
  generateIfNeeded(api, api.appDir)
  if (api.prompts.addToGitignore) {
    console.log('Adding generated files to .gitignore.')

    const path = api.appDir + '/.gitignore'
    let gitignore = fs.existsSync(path) ? fs.readFileSync(path).toString() : '\n'

    if (!gitignore.match(/^.quasar-ide-helper/gm)) {
      gitignore += '\n.quasar-ide-helper\n'
    }
    if (!gitignore.match(/^webpack\.config\.js/gm)) {
      gitignore += '\nwebpack.config.js\n'
    }
    fs.writeFileSync(path, gitignore)
  }
}
