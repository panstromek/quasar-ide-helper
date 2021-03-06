const fs = require('fs')

function generateIfNeeded (appDir, cfg) {
  if (!fs.existsSync(`${appDir}/webpack.config.js`)) {
    console.log('Generating fake webpack config')
    fs.writeFileSync(`${appDir}/webpack.config.js`, `
/* eslint-disable */
/**
 * DON'T EDIT THIS FILE!!
 *
 * This file is generated to help WebStorm resolve Webpack aliases. It is never run in the app.
 * If you need to extend your webpack config, put your code in quasar.conf.js into extendWebpack function
 *
 * If you changed your WebPack config, you can delete this file. It will be regenerated again with up to date config
 *
 * Next line is picked up by ide-helper, don't change it:
 * generated-by-ide-helper
 */
module.exports = ${JSON.stringify(cfg)}
`)
  }
}

module.exports.setupFakeWebPackConfig = function (appDir, api) {
  const configPath = `${appDir}/webpack.config.js`
  const configExists = fs.existsSync(configPath)
  // TODO detect if webpack config changed
  //TODO don't delete and don't regenerate this - it is run on every rebuild
  if (configExists && !fs.readFileSync(configPath).toString().includes('generated-by-ide-helper')) {
    console.log('Found WebPack config that was not generated by ide-helper. Skipping fake webpack config setup.')
    console.log('   (Delete the file and rerun build command again to set it up)')
  } else {
    if (configExists) {
      console.log('Deleting generated "fake" webpack config (it will be generated again on next build)')
      fs.unlinkSync(configPath)
    }

    let config = {}
    api.extendWebpack(cfg => {
      // TODO detect if webpack config changed
      config = cfg
    })

    api.beforeDev(() => {
      generateIfNeeded(appDir, config)
    })
    console.log('Registered hook to generate new "fake" webpack config on next build')
  }
}
