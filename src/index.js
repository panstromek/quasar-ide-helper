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

  const generate = require('./generators')
  const generateCss = require('./generators/css')
  const collectApis = require('./utils/collectApis')
  const generateTemplates = require('./generators/templates')
  const { addVueCoreLibsToIdeaFolder } = require('./generators/idea-folder')
  const appDir = api.appDir

  const apiPath = `${appDir}/node_modules/quasar/dist/api`

  const { setupFakeWebPackConfig } = require('./generators/fake-wepack-config')
  setupFakeWebPackConfig(appDir, api)

  const quasarVersion = api.getPackageVersion('quasar')
  const ideHelperVersion = api.getPackageVersion('quasar-app-extension-ide-helper')
  const persistentConfig = api.getPersistentConf()
  if (persistentConfig.lastQuasarVersion !== quasarVersion ||
    persistentConfig.lastIdeHelperVersion !== ideHelperVersion) {
    generateAll()
  }

  function generateAll () {
    console.log('Collecting API files...')
    const apis = collectApis(apiPath)
    console.log('Generating components, directives and injections...')
    generate(appDir, apis)
    console.log('Generating CSS files...')
    generateCss(appDir)
    console.log('Adding Vue core libs as libraries in .idea folder')
    addVueCoreLibsToIdeaFolder(appDir)
    console.log('Generated - Enjoy ;)')
    console.log('')
    console.log('Note: You may need to close and reopen the project for some changes to take effect.')
    console.log('If you don\'t see changes even then, try to run the script without opened project.')
    api.mergePersistentConf({
      lastQuasarVersion: api.getPackageVersion('quasar'),
      lastIdeHelperVersion: api.getPackageVersion('quasar-app-extension-ide-helper')
    })
  }

  api.registerCommand('generate', generateAll)

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
