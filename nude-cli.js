#!/usr/bin/env node
var nude = require("nude");
var first = process.argv[2];
var second = process.argv[3];

if (first == "-h" || first == "--help"){
  console.log("Usage: nude-cli [options] file");
  console.log("v0.0.1");
  console.log("Options:");
  process.stdout.write("-v --verbose Verbose output"+'\n'+
                       "-i --integer Return 1 or 0 instead of a boolean"+'\n'+
                       "-h --help Display help"+'\n');
  process.exit(1);
}

// No file, display help
if (first === undefined){
  console.log("Usage: nude-cli [options] file");
  process.exit(1);
}

// first is image if no second
var image = (second === undefined)?first:second;

// if absoulte path or not
if (image.charAt(0) != "/") {
  image = process.env.PWD + "/" + image;
}

// Do the thing
nude.scan(image, function(res) {
  switch (first){
    case "-v":
    case "--verbose":
      process.stdout.write("File: "+image+'\n'+
                           "Contains nudity: " + res+'\n');
      break;
    case "-i":
    case "--integer":
      console.log((res)?"1":"0");
      break;
    default:
      console.log(res);
      break;
  }
});
