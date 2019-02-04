const fs = require('fs')
const escape = require('xml-escape')
const { toCamel, toKebab } = require('./utils/casing')
/**
 * Generate live templates
 * @param {[{name:String, api: Object}]} apis
 * @param {String} targetDir
 */
module.exports = function (apis, targetDir) {
  let targetFile = targetDir + '/Quasar.xml'
  fs.writeFileSync(targetFile,
    '<templateSet group="Quasar">\n')

  // filter to components only
  apis
    .filter(({ api }) => api.type === 'component')
    .filter(({ api }) => !!api.props) //WOrkaround?
    .forEach(component => fs.appendFileSync(targetFile, createTemplates(component)))

  fs.appendFileSync(targetFile,
    '</templateSet>')
}

function createTemplates ({ name, api }) {
  return preTemplate({ name, api })
}

function propsTemplate (props) {
  return Object.entries(props)
    .filter(([name, prop]) => prop.type !== 'Boolean')
    .map(([name, prop]) => {
      const xmlVar = `<variable name="${toCamel(name)}" expression="" defaultValue="" alwaysStopAt="true"/>`
      if (prop.type === 'String') {
        return {
          preTemplate: `[${toKebab(name)}=$${toCamel(name)}$]`,
          xml: xmlVar,

          postTemplate: `$${toCamel(name)}Binding$${toKebab(name)}="$${toCamel(name)}$"`,
          postXml: `<variable name="${toCamel(name)}Binding" expression="" defaultValue=":" alwaysStopAt="true"/>${xmlVar}`
        }
      }
      return {
        preTemplate: `[${toKebab(name)}=$${toCamel(name)}$]`,
        xml: xmlVar,

        postTemplate: `:${toKebab(name)}="$${toCamel(name)}$"`,
        postXml: xmlVar
      }
    })
}

function createTemplate (name, template, description, variables) {
  return `
      <template name="${name}" value="${escape(template)}"
                description="${description}" toReformat="false"
                toShortenFQNames="true">
${variables}
          <context>
              <option name="VUE_TEMPLATE" value="true"/>
          </context>
      </template>
  `
}

/**
 *
 * @param {String} name
 * @param {{type: String, props: Object}} api
 * @return {string}
 */
function preTemplate ({ name: rawName, api }) {
  const kebabName = toKebab(rawName)
  const name = rawName.toLowerCase()
  const props = propsTemplate(api.props)
  const preProps = props.map(({ preTemplate }) => preTemplate).join('')
  const postProps = props.map(({ postTemplate }) => postTemplate).join(' ')
  const preVariables = props.map(({ xml }) => xml).join('\n')
  const postVariables = props.map(({ postXml }) => postXml).join('\n')

  return createTemplate(
    `${name}t`,
    `${kebabName}${preProps}`,
    `Scaffold ${rawName} pre-template (expand with double tab)`,
    preVariables)
    +
    createTemplate(
      name,
      `<${kebabName} ${postProps} />`,
      `Scaffold ${rawName}`,
      postVariables)
}
