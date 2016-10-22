
const getComponents = require('./lib/get-components')
const render = require('./lib/render')

const build = (dir, opts) => {
  const components = getComponents(dir, opts)

  const args = Object.assign({
    components
  }, opts)

  const html = render(args)

  return html
}

module.exports = build

