'use strict';

const Path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');

class Process {
  constructor() {
    this.paths = {
      temp: Path.join(__dirname, './../../.bbpipelines-temp')
    };
  }
  
  setupTemp() {
    if(fs.existsSync(this.paths.temp)) {
      rimraf.sync(this.paths.temp);
    }
    
    fs.mkdirSync(this.paths.temp);
  }
  
  run() {
    console.log('Running the process: ');
  }
  
  teardownTemp() {
    rimraf.sync(this.paths.temp);
  }
}

module.exports = Process;