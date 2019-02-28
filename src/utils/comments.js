const me = module.exports = {
  typeComment ({ type, desc, definition, values, examples }) {
    if (values) {
      return values.map(val => typeof val === 'string' ? `'${val}'` : val).join('|')
    }
    if (Array.isArray(type)) {
      type = type.toString().replace(/,/g, '|')
    }
    return type && type.replace(/Any/g, '*')
  },
  propComment (prop) {
    return `
    /**
     * ${prop.desc}${prop.reactive ? ' (reactive)' : ''}
     * @type {${me.typeComment(prop)}}
     */`
  }
}
