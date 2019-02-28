const { typeComment } = require('../utils/comments')

function functionDirective (name, value) {
  return `
/*
 * @param {${typeComment(value)}} ${value && value.desc}
 */
Vue.directive('${name}="(${Object.keys(value.params).map(p => p.toLowerCase()).join(', ')}) => {}"', {})\n`
}

module.exports = {
  directive (name, { arg = {}, value = {}, modifiers = {} }) {
    return `
/*
 * @param {${typeComment(value)}} ${value && value.desc}
 */
Vue.directive('${name}', {})\n${value.type === 'Function' ?
      functionDirective(name, value) : ''}`
  }
}
