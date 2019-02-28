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
    return [type]
      .flat(1)
      .map(type => {
        if (type === 'Object' && definition) {
          return Object.entries(definition)
            .map(([name, api]) => {
              return `{${name} : ${me.typeComment(api)}}`
            }).join(', ')
        }
        return type
      })
      .join('|')
      .replace(/Any/g, '*')
  },
  propComment (prop) {
    return `
    /**
     * ${prop.desc}${prop.reactive ? ' (reactive)' : ''}
     * @type {${me.typeComment(prop)}}
     */`
  }
}
