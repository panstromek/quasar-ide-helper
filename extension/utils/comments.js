const me = module.exports = {
  typeComment (type) {
    if (Array.isArray(type)) {
      type = type.toString().replace(/,/g, '|')
    }
    return type && type.replace(/Any/g, '*')
  },
  propComment (prop) {
    return `
    /**
     * ${prop.desc}${prop.reactive ? ' (reactive)' : ''}
     * @type {${me.typeComment(prop.type)}}
     */`
  }
}