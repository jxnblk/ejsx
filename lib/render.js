
const vm = require('vm')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')

module.exports = ({
  components = '',
  rootComponentName = 'Root',
  entry,
  props,
  globals
} = {}) => {

  const ctxObj = Object.assign({
    React,
    renderToStaticMarkup,
    html: null,
  }, globals)

  entry = entry || (`
  const props = ${JSON.stringify(props)}

  html = renderToStaticMarkup(
    React.createElement(${rootComponentName}, props)
  )`)

  const src = [
    components,
    entry
  ].join('\n')

  const script = new vm.Script(src)
  const ctx = new vm.createContext(ctxObj)

  script.runInContext(ctx)

  return '<!DOCTYPE html>' + ctxObj.html
}

