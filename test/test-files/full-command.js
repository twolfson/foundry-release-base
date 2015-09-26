// Load in our dependencies
var FoundryReleaseBase = require('../../');

// Define our parser
var fullReleaseCommand = new FoundryReleaseBase({
  updateFiles: function (version, message) {
    console.log('Step run: update-files ' + version + ' ' + message);
    process.exit(0);
  },
  commit: function (version, message) {
    console.log('Step run: commit ' + version + ' ' + message);
    process.exit(0);
  },
  register: function (version, message) {
    console.log('Step run: register ' + version + ' ' + message);
    process.exit(0);
  },
  publish: function (version, message) {
    console.log('Step run: publish ' + version + ' ' + message);
    process.exit(0);
  }
});
fullReleaseCommand.parse(process.argv);
