// Load in dependencies
var assert = require('assert');
var foundryReleaseBase = require('../');

// Start our tests
describe('foundry-release-base', function () {
  it('returns awesome', function () {
    assert.strictEqual(foundryReleaseBase(), 'awesome');
  });
});
