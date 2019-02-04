const fs = require('fs')

/**
 *
 * Generates css file from all CSS in Quasar repo.
 * Idea doesn't index CSS node_modules by default
 * and it's not intuitive how to even set it up properly (I couldn't :D ),
 * so this is convenient, but dirty workaround for getting autocomplete for Quasar CSS
 *
 * @param {String} appDir
 */
module.exports = function (appDir) {
  const cssPath = `${appDir}/node_modules/quasar/dist`
  const files = fs.readdirSync(cssPath)
  const targetCssFile = `${appDir}/.quasar-ide-helper.css`

  fs.writeFileSync(targetCssFile, '')
  files.forEach(filename => {
    if (filename.endsWith('.min.css')) {
      fs.appendFileSync(targetCssFile, fs.readFileSync(`${cssPath}/${filename}`))
    }
  })
}