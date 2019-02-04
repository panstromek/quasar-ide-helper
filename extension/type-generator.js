const fs = require('fs')
const { toCamel } = require('./utils/casing')

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

module.exports = function (appDir) {
  const apiPath = `${appDir}/node_modules/quasar/dist/api`
  const apis = fs.readdirSync(apiPath)

  const generators = {
    'component': component,
    'plugin': plugin,
    'directive': directive
  }

  const targetFile = `${appDir}/.quasar-ide-helper.js`
  fs.writeFileSync(targetFile,
    'import Vue from \'vue\'\n')

  const injections = []

  apis.forEach(name => {
    const api = require(`${apiPath}/${name}`)
    if (name.endsWith('.json')) {
      name = name.substring(0, name.length - 5)
    }
    if (api.type === 'plugin') {
      injections.push({
        name, api
      })
      return
    }
    fs.appendFileSync(targetFile,
      (generators[api.type] || (() => ``))(name, api))
  })
  generateInjections(targetFile, injections)
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

function component (name, api) {
  return `
Vue.component('${name}', {
  name: '${name}',
  props: {${vueProps(api.props)}
  }
})
`
}

function typeComment (type) {
  if (Array.isArray(type)) {
    type = type.toString().replace(/,/g, '|')
  }
  return type.replace(/Any/g, '*')
}

function generateVueType (type) {
  if (Array.isArray(type)) {
    return `[${type.toString()}]`
  }
  return type
}

function propComment (prop) {
  return `
    /**
     * ${prop.desc}${prop.reactive ? ' (reactive)' : ''}
     * @type {${typeComment(prop.type)}}
     */`
}

function vueType (type) {
  if (type === 'Any' || (Array.isArray(type) && type.includes('Any'))) {
    return ``
  }
  return `
      type: ${generateVueType(type)},`
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

function vueProps (props) {
  if (!props) {
    return ``
  }
  return Object.entries(props)
    .map(([name, prop]) => {
      const VueType = vueType(prop.type)
      const required = prop.required ? `
      required: true` : ``

      return `${propComment(prop)}
    ${toCamel(name)}: {${VueType}${required}
    }`
    })
}

function directive (name, api) {
  return `
Vue.directive('${name}', {})
`
}
