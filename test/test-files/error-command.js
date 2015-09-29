// Load in our dependencies
var FoundryReleaseBase = require('../../');

// Define our parser
var errorReleaseCommand = new FoundryReleaseBase({
  updateFiles: function (params, cb) {
    throw new Error('Error thrown: updateFiles ' + params.version + ' ' + params.message);
  },
  commit: function (params, cb) {
    process.nextTick(function callbackWithError () {
      var err = new Error('Error callback: commit ' + params.version + ' ' + params.message);
      cb(err);
    });
  }
});
errorReleaseCommand.parse(process.argv);
