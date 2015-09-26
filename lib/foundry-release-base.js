// Load in our dependencies
var Command = require('commander').Command;
var util = require('util');

// Define our constructor
function FoundryReleaseBase(params) {
  // Inherit from `Command`
  Command.call(this);

  // Define our commands
  var that = this;
  this.on('--spec-version', function outputSpecVersion () {
    console.log(that.specVersion);
    process.exit();
  });
}
util.inherits(FoundryReleaseBase, Command);
FoundryReleaseBase.prototype.specVersion = '2.0.0';

// Expose our constructor
module.exports = FoundryReleaseBase;
