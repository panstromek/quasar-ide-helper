const { flatter } = require('../utils/helpers')
const toKebab = require('../utils/casing').toKebab
const { typeComment, propComment } = require('../utils/comments')
const toCamel = require('../utils/casing').toCamel
module.exports = {
  generateComponents (name, api) {
    return [[name, component(name, api)]]
  }
}

function eventParams (params = {}) {
  return Object.entries(params)
    .map(([name, api]) => {
      return `     * @param {${typeComment(api)}} ${name} ${api.desc} `
    }).join('\n')
}

function vueEvents (events = {}) {
  return Object.entries(events)
    .map(([name, event]) => {
      return `
    /**
     * ${event.desc}
${eventParams(event.params)}
     */      
    '@${name}': function (${Object.keys(event.params || {})}) {},`
    }).join('\n')
}

function component (name, api) {
  return `
/**
 * Quasar ${name} component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/${toKebab(name.substring(1))}|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: '${name}',
  props: {${vueEvents(api.events)}${vueProps(api.props)}
  }
}
`
}

function vueType (type) {
  if (type === 'Any' || (Array.isArray(type) && type.includes('Any'))) {
    return ``
  }
  return `
      type: ${generateVueType(type)},`
}

function vueProps (props) {
  if (!props) {
    return ``
  }
  return Object.entries(props)
  // Duplicate prop for each enum value
    .map(([name, prop]) => {

      /// For now only for strings - We can try to handle numbers later
      if (prop.type === 'String' && prop.values) {
        return [[name, prop],
          ...prop.values.map(val => [`'${name}="${val}" _'`, { ...prop }])]
      }
      return [[name, prop]]
    })
    .reduce(flatter, [])
    .map(([name, prop]) => {
      const VueType = vueType(prop.type)
      const required = prop.required ? `
      required: true` : ``

      return `${propComment(prop)}
    ${toCamel(name)}: {${VueType}${required}
    }`
    })
}

function generateVueType (type) {
  if (Array.isArray(type)) {
    return `[${type.toString()}]`
  }
  return type
}
