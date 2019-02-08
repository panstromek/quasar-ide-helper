const { propComment, typeComment } = require('../utils/comments')

module.exports = {
  generateInjections (injections) {
    return `
/**
* Quasar plugins injected to prototype:
* ${injectionListComment(injections)} 
*/
Vue.prototype.$q = {
  ${injections.map(generateInjection).join(',\n  ')}
}`
  }
}

function injectionListComment (plugins) {
  return plugins
    .map(({ name, api }) => `* ${api.injection}`).join('\n')
}

function generateInjection ({ name, api }) {
  return `${api.injection.substring(3)} : {
  ${objectProps(api.props)}
  ${pluginMethods(api.methods)}
  }`
}

function paramDoc (params = []) {
  return Object.entries(params)
    .map(([name, param]) => {
      const paramName = param.required ? name : `[${name}]`
      return `
     * @param {${typeComment(param.type)}} ${paramName} ${param.desc}`
    }).join('')
}

function returns (returns = { type: undefined, desc: '' }) {
  return `@returns {${typeComment(returns.type)}} ${returns.desc}`
}

function pluginMethods (methods = []) {
  return Object.entries(methods)
    .map(([name, methodApi]) => {
      return `
    /**
     * ${methodApi.desc}${paramDoc(methodApi.params)}
     * ${returns(methodApi.returns)}
     */
    ${name} (${Object.keys(methodApi.params || {})}) {}`
    })
}

function objectProps (props) {
  if (!props) {
    return ``
  }
  return Object.entries(props)
    .map(([name, prop]) => {
      return `${propComment(prop)}
    ${name}: {}`
    }).toString() + ','
}
