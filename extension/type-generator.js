const fs = require('fs')
const propComment = require('./utils/comments').propComment
const { generateComponent } = require('./generateComponent')
const typeComment = require('./utils/comments').typeComment

function writeComponents (directory, components) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
  }
  components.forEach(({ api, name }) => fs.writeFileSync(`${directory}/${name}.js`, generateComponent(name, api)))

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
  fs.writeFileSync(targetFile, `import Vue from 'vue';`)
  generateInjections(targetFile, injections)

}

module.exports = function (appDir, apis) {

  const dir = `${appDir}/.quasar-ide-helper`

  const components = apis.filter(({ api }) => api.type === 'component')
  writeComponents(dir, components)

  const directives = apis.filter(({ api }) => api.type === 'directive')
  writeDirectives(dir, directives)

  const injections = apis.filter(({ api }) => api.type === 'plugin' && api.injection)

  writeInjections(dir, injections)
}

function generateInjections (targetFile, plugins) {
  fs.appendFileSync(targetFile,
    `
  /**
   * Quasar plugins injected to prototype:${plugins.map(({ name, api }) => {
      if (!api.injection) {
        return ``
      }
      return `
   * ${api.injection}
`
    }).reduce((lines, line) => lines + line, ``)}
   */
  Vue.prototype.$q = {
  `)
  plugins.forEach(({ name, api }) => {
    fs.appendFileSync(targetFile,
      plugin(name, api))
  })

  fs.appendFileSync(targetFile,
    `
  }`)
}

function paramDoc (params) {
  if (!params) {
    return ``
  }
  return Object.entries(params).map(([name, param]) => {
    const paramName = param.required ? name : `[${name}]`
    return `
    * @param {${typeComment(param.type)}} ${paramName} ${param.desc}`
  }).reduce((params, param) => params + param, ``)
}

function returns (returns) {
  if (!returns) {
    return ``
  }
  return `
    * @return {${typeComment(returns.type)}} ${returns.desc}`
}

function pluginMethods (methods) {
  if (!methods) {
    return ``
  }
  return Object.entries(methods).map(([name, methodApi]) => {
    return `
   /**
    * ${methodApi.desc}${paramDoc(methodApi.params)}${returns(methodApi.returns)}
    */
    ${name} (${Object.keys(methodApi.params || {})}) {}`
  })
}

function plugin (name, api) {
  if (api.injection === undefined) {
    // TODO meta plugin
    return ``
  }
  return `
${api.injection.substring(3)} : {
  ${objectProps(api.props)}
  ${pluginMethods(api.methods)}
},
`
}

function objectProps (props) {
  if (!props) {
    return ``
  }
  return Object.entries(props)
    .map(([name, prop]) => {
      return `${propComment(prop)}
    '${name}': {}`
    }).toString() + ','
}

function directive (name, api) {
  return `
Vue.directive('${name}', {})
`
}
