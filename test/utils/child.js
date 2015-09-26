// Load in our dependencies
var exec = require('child_process').exec;

// Define our utilities
exports.exec = function (command) {
  before(function execFn (done) {
    // Run our command
    var that = this;
    exec(command, function handleExec (err, stdout, stderr) {
      // Save all our variables to `this`
      that.err = err;
      that.stdout = stdout;
      that.stderr = stderr;

      // Callback with no errors
      done();
    });
  });
};
