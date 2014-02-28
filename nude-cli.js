var nude = require("nude");
var image = process.argv[2];

// No file, display help
if (image == undefined){
  console.log("Usage: nude-cli file");
  process.exit(1);
}

// Do the thing
nude.scan(__dirname + "/" + process.argv[2], function(res) {
    console.log('Contains nudity: ' + res);
});
