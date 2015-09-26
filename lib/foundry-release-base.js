// Load in our dependencies
var Command = require('commander').Command;
var util = require('util');

// Define our constructor
function FoundryReleaseBase(params) {
  // Save reference to Foundry context
  var that = this;

  // Inherit from `Command`
  Command.call(this);

  // Define our commands
  this.option('--spec-version', 'Output the spec-version for foundry');
  this.on('spec-version', function outputSpecVersion () {
    console.log(that._specVersion);
    process.exit();
  });
}
util.inherits(FoundryReleaseBase, Command);
FoundryReleaseBase.prototype._specVersion = '2.0.0';

// Expose our constructor
module.exports = FoundryReleaseBase;
