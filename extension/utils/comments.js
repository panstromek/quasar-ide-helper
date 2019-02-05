function typeComment (type) {
  if (Array.isArray(type)) {
    type = type.toString().replace(/,/g, '|')
  }
  return type.replace(/Any/g, '*')
}

function propComment (prop) {
  return `
    /**
     * ${prop.desc}${prop.reactive ? ' (reactive)' : ''}
     * @type {${typeComment(prop.type)}}
     */`
}

module.exports = {
  typeComment, propComment
}