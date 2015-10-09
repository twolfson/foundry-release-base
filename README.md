# foundry-release-base [![Build status](https://travis-ci.org/twolfson/foundry-release-base.png?branch=master)](https://travis-ci.org/twolfson/foundry-release-base) [![Build status](https://ci.appveyor.com/api/projects/status/spoi5veh3r3jo98m/branch/master?svg=true)](https://ci.appveyor.com/project/twolfson/foundry-release-base/branch/master)

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
var pkg = require('./package.json');
var myReleaseCommand = new FoundryReleaseBase({
    // Define action to run on `my-release-plugin update-files`
    updateFiles: function (params) { // params = {version, message}
        // Update files for release
    },
    // Define action to run on `my-release-plugin commit`
    commit: function (params) { // params = {version, message}
        // Commit changes to files
    },
    // Define action to run on `my-release-plugin register`
    register: function (params) { // params = {version, message}
        // Register our package to its repository
    },
    // Define action to run on `my-release-plugin publish`
    publish: function (params) { // params = {version, message}
        // Publish our package to its repository
    }
});
myReleaseCommand.version(pkg.version);

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
`foundry-release-base` exposes `FoundryReleaseBase` via its `module.exports`.

### `FoundryReleaseBase(params)`
`FoundryReleaseBase` is a constructor that inherits from `Command` from [commander.js][].

- params `Object` - Container for methods and options
    - updateFiles `Function` - Optional function that updates package's files as part of its release
        - For example, this could update `package.json` for an `npm` release
        - Function signature should match `function (params, cb)`
            - params `Object` - Container for release information
                - version `String` - Semantic version for the current release
                - message `String` - Subject giving information about release
            - cb `Function` - Error-first callback to notify `FoundryReleaseBase` of when task is complete
                - Function signature will be `function (err)` where `err` is either an `Error` or `null`
                - Upon non-error callback, we will exit with a 0 exit code
                - Upon error callback, we will throw the `Error` which leads to a non-zero exit code
    - updateFilesDescription `String` - Optional description to use for `update-files` command in `--help`
    - commit `Function` - Optional function that saves changes to files as part of its release
        - For example, this could run `git commit` for a `git` release
        - Function signature will be the same as `updateFiles`
    - commitDescription `String` - Optional description to use for `commit` command in `--help`
    - register `Function` - Optional function that register package to its repository as part of its release
        - For example, this could run `bower register` for a `bower` release
        - Function signature will be the same as `updateFiles`
    - registerDescription `String` - Optional description to use for `register` command in `--help`
    - publish `Function` - Optional function that publish package to its repository as part of its release
        - For example, this could run `npm publish` for an `npm` release
        - Function signature will be the same as `updateFiles`
    - publishDescription `String` - Optional description to use for `publish` command in `--help`

[commander.js]: https://github.com/visionmedia/commander.js

#### `foundryReleaseBase.*`
`FoundryReleaseBase` inherits from `Command` from [commander.js][]. As a result, we support all of the methods provided by [commander.js][]. This include `.version()`, `.parse()`. Please see [commander.js][]' documentation for more information.

```js
// Add support for running `--version` on CLI
var pkg = require('./package.json');
myReleaseCommand.version(pkg.version);

// Interpret CLI argument
myReleaseCommand.parse(process.argv);
```

Documentation: https://github.com/tj/commander.js

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
