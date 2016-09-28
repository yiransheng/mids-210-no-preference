#!/usr/bin/env node

var parse = require('./parse');

var argv = require('yargs')
  .command('parse [file]', 'parse a single js file')
  .help()
  .argv

if (argv._.length) {
  var filename = argv._[0];
  var scriptId = filename.replace(/\.js$/, '')
    .replace(/^.+\//, '');
  parse(filename, function(err, data) {
    if (!err) {
      console.log(scriptId + '\t' + JSON.stringify(data));
      console.log("\n");
    } else {
      console.error(err);
    }
  });
}