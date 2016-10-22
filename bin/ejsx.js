#!/usr/bin/env node

// const fs = require('fs')
const meow = require('meow')
const build = require('..')

const cli = meow(`
  Usage
    $ ejsx <input-dir>

  Options

  Examples
    $ ejsx components

`)

const html = build(cli.input[0], cli.flags)

// should this default to write file?
process.stdout.write(html)

