const fs = require('fs')
const directive = require('./directive').directive
const generateInjections = require('./injections').generateInjections
const { generateComponents } = require('./component')

function writeComponents (directory, components) {
  components.forEach(({ api, name }) => {
    generateComponents(name, api)
      .forEach(([name, data]) => {
        return fs.writeFileSync(`${directory}/${name}.js`, data)
      })

  })

  fs.writeFileSync(`${directory}/imports.js`, `import Vue from 'vue';`)

  components.forEach(({ api, name }) => {
    fs.appendFileSync(`${directory}/imports.js`, `import ${name} from './${name}.js';`)
  })

  components.forEach(({ api, name }) => {
    fs.appendFileSync(`${directory}/imports.js`, `Vue.component(${name}.name, ${name});`)
  })
}

function writeDirectives (dir, directives) {
  const file = `${dir}/directives.js`
  fs.writeFileSync(file, 'import Vue from \'vue\'\n')
  directives.forEach(({ name, api }) => fs.appendFileSync(file, directive(name, api)))
}

function writeInjections (dir, injections) {
  const targetFile = `${dir}/injections.js`
  fs.writeFileSync(targetFile, `import Vue from 'vue';${generateInjections(injections)}`)
}

module.exports = function (appDir, apis) {
  const dir = `${appDir}/.quasar-ide-helper`
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  const components = apis.filter(({ api }) => api.type === 'component')
  writeComponents(dir, components)

  const directives = apis.filter(({ api }) => api.type === 'directive')
  writeDirectives(dir, directives)

  const injections = apis.filter(({ api }) => api.type === 'plugin' && api.injection)

  writeInjections(dir, injections)
}

