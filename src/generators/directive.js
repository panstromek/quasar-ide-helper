function functionDirective (name, value) {
  return `Vue.directive('${name}="(${Object.keys(value.params).map(p => p.toLowerCase()).join(', ')}) => {}"', {})\n`
}

module.exports = {
  directive (name, { arg = {}, value = {}, modifiers = {} }) {
    return `Vue.directive('${name}', {})\n`
      + (value.type === 'Function' ?
        functionDirective(name, value) : '')
  }
}
