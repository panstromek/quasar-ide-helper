const fs = require('fs-extra')

/**
 *
 * Generates css files from all CSS in Quasar repo.
 * Idea provide autocomplete for in CSS node_modules by default
 * and it's not intuitive how to even set it up properly (I couldn't at first:D ),
 * so this is convenient, but dirty workaround for getting autocomplete for Quasar CSS
 *
 * For now it just copies the files, so you could actually point Idea to these folders yourself
 * but it's kind of unreliable and not many people will know this setting.
 * More importantly - I also want to generate some docs and comments to these files eventually
 * so this is not totally pointless as you might think
 *
 * @param {String} appDir
 */
module.exports = function (appDir) {
  const cssPath = `${appDir}/node_modules/quasar/dist`
  const files = fs.readdirSync(cssPath)
  const targetDir = `${appDir}/.quasar-ide-helper`
  files.forEach(filename => {
    if (filename.endsWith('.css') && !filename.endsWith('min.css')) {
      fs.copyFileSync(`${cssPath}/${filename}`, `${targetDir}/${filename}`)
    }
  })
}