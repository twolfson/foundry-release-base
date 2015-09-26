// Load in dependencies
var expect = require('chai').expect;
var childUtils = require('./utils/child');

// Start our tests
describe('foundry-release-base', function () {
  describe('running --spec-version', function () {
    childUtils.exec('base-plugin --spec-version');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the spec version', function () {
      expect(this.stdout).to.match(/^\d+\.\d+\.\d+$/);
    });
  });
});
