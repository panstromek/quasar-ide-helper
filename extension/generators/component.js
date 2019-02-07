const toKebab = require('../utils/casing').toKebab
const { propComment } = require('../utils/comments')
const toCamel = require('../utils/casing').toCamel
module.exports = {
  generateComponent (name, api) {
    return component(name, api)
  }
}

function component (name, api) {
  return `
/**
 * Quasar ${name} component
 * 
 * @see {@link http://quasar-framework.com/vue-components/${toKebab(name.substring(1))}|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: '${name}',
  props: {${vueProps(api.props)}
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
