// Load in our dependencies
var FoundryReleaseBase = require('../../');

// Define our parser
var fullReleaseCommand = new FoundryReleaseBase({
  updateFiles: function (params, cb) {
    console.log('Step run: update-files ' + params.version + ' ' + params.message);
    process.nextTick(cb);
  },
  commit: function (params, cb) {
    console.log('Step run: commit ' + params.version + ' ' + params.message);
    process.nextTick(cb);
  },
  register: function (params, cb) {
    console.log('Step run: register ' + params.version + ' ' + params.message);
    process.nextTick(cb);
  },
  publish: function (params, cb) {
    console.log('Step run: publish ' + params.version + ' ' + params.message);
    process.nextTick(cb);
  }
});
fullReleaseCommand.parse(process.argv);
