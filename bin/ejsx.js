#!/usr/bin/env node

// const fs = require('fs')
const path = require('path')
const meow = require('meow')
const build = require('..')

// Options to add:
// - entry/renderer
// - globals
// - file extension

const cli = meow(`
  Usage
    $ ejsx <dir>

  Options
    -p --props        JSON file to provide data as props
                      to the Root component

    -r --root         Root component name (defaults to Root.jsx)

    -e --extension    File extension for JSX templates


  Examples

    $ ejsx components

    $ ejsx components -r App -p data.json

`, {
  alias: {
    r: 'rootComponentName',
    root: 'rootComponentName',
    e: 'extension',
    p: 'props'
  }
})

let props = {}

if (cli.flags.props) {
  props = require(path.resolve(process.cwd(), cli.flags.props))
}

const html = build(cli.input[0], Object.assign({}, cli.flags, {
  props
}))

// should this default to write file?
process.stdout.write(html)

