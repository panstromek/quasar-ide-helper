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
  if (api.prompts.addToGitIgnore) {
    console.log('Adding generated files to .gitignore.')

    const path = api.appDir + '/.gitignore'
    let gitignore = fs.existsSync(path) ? fs.readFileSync(path).toString() : '\n'

    let append = ''

    if (!gitignore.match(/^.quasar-ide-helper/gm)) {
      append += '\n.quasar-ide-helper\n'
    }
    if (!gitignore.match(/^webpack\.config\.js/gm)) {
      append += '\nwebpack.config.js\n'
    }
    if (append) {
      fs.appendFileSync(path, append)
    }
  }
}
