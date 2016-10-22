
const vm = require('vm')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')

module.exports = ({
  components = '',
  rootComponentName = 'Root',
  entry,
  globals
} = {}) => {

  const ctxObj = Object.assign({
    React,
    renderToStaticMarkup,
    html: null,
  }, globals)

  entry = entry || (`
  html = renderToStaticMarkup(
    React.createElement(${rootComponentName})
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

