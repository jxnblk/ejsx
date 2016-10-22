
const path = require('path')
const build = require('..')

const dir = path.join(__dirname, '.')

const html = build(dir)

console.log(html)

