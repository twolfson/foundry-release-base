// Load in our dependencies
var FoundryReleaseBase = require('../../');

// Define our parser
var emptyReleaseCommand = new FoundryReleaseBase({
});
emptyReleaseCommand.parse(process.argv);
