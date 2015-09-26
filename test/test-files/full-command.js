// Load in our dependencies
var FoundryReleaseBase = require('../../');

// Define our parser
// TODO: We might want something else besides `new` so we can directly use `Commander`
var fullReleaseCommand = new FoundryReleaseBase({
  // TODO: Should we use 1 by 1 syntax or bundle via options
  //   What does Commander integrate with nicely?
  updateFiles: function (version, message) {
    // TODO: Complete me
  }
});
fullReleaseCommand.parse(process.argv);
