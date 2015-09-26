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
  // https://github.com/tj/commander.js/blob/v2.8.1/index.js#L801-L823
  this.option('--spec-version', 'Output the spec-version for foundry');
  this.on('spec-version', function outputSpecVersion () {
    process.stdout.write(that._specVersion + '\n');
    process.exit(0);
  });
}
util.inherits(FoundryReleaseBase, Command);
FoundryReleaseBase.prototype._specVersion = '2.0.0';

// Expose our constructor
module.exports = FoundryReleaseBase;
