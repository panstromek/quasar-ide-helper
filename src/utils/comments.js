const me = module.exports = {
  typeComment ({ type, desc, definition, values, examples }) {
    if (values) {
      return values.map(val => {
        switch (typeof val) {
          case 'string':
            return `'${val}'`
          case 'boolean':
            return `Boolean`
          default :
            return val
        }
      }).filter((t, i, arr) => arr.lastIndexOf(t) === i).join('|')
    }
    if (Array.isArray(type)) {
      type = type.join('|')
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
