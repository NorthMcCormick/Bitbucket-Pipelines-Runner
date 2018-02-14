#!/usr/bin/env node

'use strict';

const Commander = require('commander');
const fs = require('fs');
const packageJson = require('./package.json');

Commander
  .version(packageJson.version)
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);