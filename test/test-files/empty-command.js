// Load in our dependencies
var FoundryReleaseBase = require('../../');

// Define our parser
// TODO: We might want something else besides `new` so we can directly use `Commander`
var emptyReleaseCommand = new FoundryReleaseBase({
});
emptyReleaseCommand.parse(process.argv);
