#!/usr/bin/env node

'use strict';

const Commander = require('commander');
const packageJson = require('./package.json');

Commander
  .version(packageJson.version)
  .option('-m, --mode', 'default')
  .parse(process.argv);

try {
  let runner = require(`./lib/classes/process-${(Commander.mode ? Commander.mode : 'default')}.class.js`).run(Commander);
} catch(e) {
  console.error(e);
}