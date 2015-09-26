# foundry-release-base [![Build status](https://travis-ci.org/twolfson/foundry-release-base.png?branch=master)](https://travis-ci.org/twolfson/foundry-release-base)

CLI base for [foundry][] release commands

This was built to make creating [foundry-release-spec][] integrations as easy as possible.

[foundry]: https://github.com/twolfson/foundry
[foundry-release-spec]: https://github.com/twolfson/foundry-release-spec

## Getting Started
Install the module with: `npm install foundry-release-base`

```js
// Inside of `my-release-command.js`
// Define our command
var FoundryReleaseBase = require('foundry-release-base');
var myReleaseCommand = new FoundryReleaseBase({
    // Define action to run on `my-release-plugin update-files`
    updateFiles: function (version, message) {
        // Update files for release
    },
    // Define action to run on `my-release-plugin commit`
    commit: function (version, message) {
        // Commit changes to files
    },
    // Define action to run on `my-release-plugin register`
    register: function (version, message) {
        // Register our package to its repository
    },
    // Define action to run on `my-release-plugin publish`
    publish: function (version, message) {
        // Publish our package to its repository
    }
});

// Parse CLI arguments
myReleaseCommand.parse(process.argv);
```

Usage from CLI:

```bash
# Invoke each of the respective functions from above
node my-release-command.js update-files "1.0.0" "Release 1.0.0"
node my-release-command.js commit "1.0.0" "Release 1.0.0"
node my-release-command.js register "1.0.0" "Release 1.0.0"
node my-release-command.js publish "1.0.0" "Release 1.0.0"
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via `npm run lint` and test via `npm test`.

## Donating
Support this project and [others by twolfson][gratipay] via [gratipay][].

[![Support via Gratipay][gratipay-badge]][gratipay]

[gratipay-badge]: https://cdn.rawgit.com/gratipay/gratipay-badge/2.x.x/dist/gratipay.png
[gratipay]: https://www.gratipay.com/twolfson/

## Unlicense
As of Sep 26 2015, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
