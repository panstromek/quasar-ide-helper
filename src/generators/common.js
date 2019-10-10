const fs = require('fs')
const generate = require('./')
const generateCss = require('./css')
const { addVueCoreLibsToIdeaFolder } = require('./idea-folder')
const collectApis = require('./../utils/collectApis')

module.exports.generateIfNeeded = generateIfNeeded
module.exports.generateAll = generateAll

function generateIfNeeded (api, appDir) {
  const quasarVersion = api.getPackageVersion('quasar')
  const ideHelperVersion = api.getPackageVersion('quasar-app-extension-ide-helper')
  const persistentConfig = api.getPersistentConf()
  if (persistentConfig.lastQuasarVersion !== quasarVersion ||
    persistentConfig.lastIdeHelperVersion !== ideHelperVersion ||
    !fs.existsSync(`${appDir}/.quasar-ide-helper`)
  ) {
    generateAll(api)
  }
}

function generateAll (api) {
  const appDir = api.appDir
  const apiPath = `${appDir}/node_modules/quasar/dist/api`
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
