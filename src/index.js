const collectApis = require('./utils/collectApis')
const generateTemplates = require('./generators/templates')
const { setupFakeWebPackConfig } = require('./generators/fake-webpack-config')
const { generateAll, generateIfNeeded } = require('./generators/common')

/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */
/**
 *
 * @param {IndexAPI} api
 * @param ctx
 */
module.exports = function (api, ctx) {
  if (api.ctx.prod) {
    return
  }
  const appDir = api.appDir
  const apiPath = `${appDir}/node_modules/quasar/dist/api`

  if (api.hasPackage('@quasar/app-webpack') || api.hasPackage('@quasar/app')) {
    setupFakeWebPackConfig(appDir, api)
  }
  generateIfNeeded(api, appDir)

  api.registerCommand('generate', () => generateAll(api))

  api.registerCommand('templates', () => {
    console.log('Collecting API files...')
    const apis = collectApis(apiPath)
    console.log('Generating template files...')
    generateTemplates(apis, appDir)
    console.log()
    console.log('Template files generated into .QuasarLiveTemplates.xml')
    console.log()
    console.log('..............................................................')
    console.log('IMPORTANT !!!')
    console.log(`To make live templates functional, you need to move the file into`)
    console.log(`'templates' in your IDE's global config directory.`)
    console.log(`For WebStorm it should be something like:`)
    console.log(`'../<user>/.WebStorm2018.3/system/jba_config/templates'`)
    console.log()
    console.log(`After you do this, restart the IDE, it will pick up them.`)
    console.log()
    console.log(`For other JetBrains IDEs it should be similar. If you are not sure, look at:`)
    console.log('https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs')
    console.log()
    console.log('..............................................................')
  })
}
