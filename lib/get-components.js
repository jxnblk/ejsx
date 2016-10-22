
const fs = require('fs')
const path = require('path')
const babel = require('babel-core')

module.exports = (dir, {
  extension = 'jsx'
} = {}) => {

  const extRegex = new RegExp('\.' + extension + '$')

  const files = fs.readdirSync(dir)
    .filter(f => extRegex.test(f))
    .map(f => {
      const contents = fs.readFileSync(path.join(dir, f), 'utf8')
      const [ name ] = f.split('.')

      return {
        name,
        contents
      }
    })

  const comps = files.map(({ name, contents }) => {
    const src = `const ${name} = props => (${contents})`
    const { code } = babel.transform(src, {
      presets: [
        'react'
      ]
    })

    return code
  }).join('\n')

  return comps
}

