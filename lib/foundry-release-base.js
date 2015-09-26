// Load in our dependencies
var Command = require('commander').Command;
var util = require('util');

// Define our constructor
function FoundryReleaseBase(params) {
  // Inherit from `Command`
  Command.call(this);

  // Define our options and commands
  // https://github.com/tj/commander.js/blob/v2.8.1/index.js#L801-L823
  var that = this;
  this.option('--spec-version', 'Output the spec-version for foundry');
  this.on('spec-version', function outputSpecVersion () {
    process.stdout.write(that._specVersion + '\n');
    process.exit(0);
  });
  if (params.updateFiles) {
    this
      .command('update-files <version> <message>')
      .description(params.updateFilesDescription || 'Update files for release')
      .action(params.updateFiles);
  }
  if (params.commit) {
    this
      .command('commit <version> <message>')
      .description(params.commitDescription || 'Commit changes for release')
      .action(params.commit);
  }
  if (params.register) {
    this
      .command('register <version> <message>')
      .description(params.registerDescription || 'Register package to repository')
      .action(params.register);
  }
  if (params.publish) {
    this
      .command('publish <version> <message>')
      .description(params.publishDescription || 'Publish package to repository')
      .action(params.publish);
  }
}
util.inherits(FoundryReleaseBase, Command);
// DEV: We use `_` prefix since `specVersion` is overwritten during parsing
FoundryReleaseBase.prototype._specVersion = '2.0.0';

// Expose our constructor
module.exports = FoundryReleaseBase;
