'use strict';

const Process = require('./../classes/process.class');
const fs = require('fs');
const Path = require('path');

class ProcessDefault extends Process {
  constructor() {
    super();
  }

  run() {
    super.run();

    console.log('Default Process');

    /**
     * Setup
     */
    this.setupTemp();
    
    /**
     * Load a template and replace the variables
     */
    let template = fs.readFileSync(Path.join(__dirname, './../templates/Dockerfile.template')).toString();
    template = template.replace('{{image}}', 'TEST');

    console.log(template);

    this.teardownTemp();
  }
  
}

module.exports = new ProcessDefault();