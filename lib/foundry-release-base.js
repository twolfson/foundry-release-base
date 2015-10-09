// Load in our dependencies
var Command = require('commander').Command;
var util = require('util');

// Define helper for handling errors
function handleActionError(err) {
  // If there was an error, throw it
  if (err) {
    throw err;
  }

  // Otherwise, exit with a 0 exit code
  process.exit(0);
}

// Define our constructor
function FoundryReleaseBase(params) {
  // Inherit from `Command`
  Command.call(this);

  // Define our options and commands
  // https://github.com/tj/commander.js/blob/v2.8.1/index.js#L801-L823
  var that = this;
  this.option('--sversion', 'Output the sversion for foundry');
  this.on('sversion', function outputSpecVersion () {
    console.log(that._specVersion);
    process.exit(0);
  });
  if (params.updateFiles) {
    this
      .command('update-files <version> <message>')
      .description(params.updateFilesDescription || 'Update files for release')
      .action(function invokeUpdateFiles (version, message) {
        // Invoke updateFiles
        params.updateFiles({
          version: version,
          message: message
        }, handleActionError);
      });
  }
  if (params.commit) {
    this
      .command('commit <version> <message>')
      .description(params.commitDescription || 'Commit changes for release')
      .action(function invokeCommit (version, message) {
        params.commit({
          version: version,
          message: message
        }, handleActionError);
      });
  }
  if (params.register) {
    this
      .command('register <version> <message>')
      .description(params.registerDescription || 'Register package to repository')
      .action(function invokeRegister (version, message) {
        params.register({
          version: version,
          message: message
        }, handleActionError);
      });
  }
  if (params.publish) {
    this
      .command('publish <version> <message>')
      .description(params.publishDescription || 'Publish package to repository')
      .action(function invokePublish (version, message) {
        params.publish({
          version: version,
          message: message
        }, handleActionError);
      });
  }
}
util.inherits(FoundryReleaseBase, Command);
// DEV: We use `_` prefix since `specVersion` is overwritten during parsing
FoundryReleaseBase.prototype._specVersion = '2.0.0';

// Expose our constructor
module.exports = FoundryReleaseBase;
