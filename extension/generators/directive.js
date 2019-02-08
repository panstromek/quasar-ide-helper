module.exports = {
  // TODO docs - I need to figure out what exactly can IDE see and how it can help with autocomplete in case
  directive (name, api) {
    return `
Vue.directive('${name}', {})
`
  }
}