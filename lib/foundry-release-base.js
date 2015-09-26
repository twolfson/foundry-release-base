// Load in our dependencies
var Command = require('commander').Command;
var util = require('util');

// Define our constructor
function FoundryReleaseBase(params) {
  // Inherit from `Command`
  Command.call(this);
}
util.inherits(FoundryReleaseBase, Command);

// Expose our constructor
module.exports = FoundryReleaseBase;
