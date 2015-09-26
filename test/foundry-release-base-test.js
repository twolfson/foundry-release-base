// Load in dependencies
var expect = require('chai').expect;
var childUtils = require('./utils/child');

// Start our tests
describe('A full command based on foundry-release-base', function () {
  describe('running --spec-version', function () {
    childUtils.exec('full-plugin --spec-version');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the spec version', function () {
      expect(this.stdout).to.match(/^\d+\.\d+\.\d+$/);
    });
  });

  describe('running update-files', function () {
    childUtils.exec('full-plugin update-files');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match('Step run: update-files');
    });
  });

  describe('running commit', function () {
    childUtils.exec('full-plugin commit');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match('Step run: commit');
    });
  });

  describe('running register', function () {
    childUtils.exec('full-plugin register');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match('Step run: register');
    });
  });

  describe('running publish', function () {
    childUtils.exec('full-plugin publish');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match('Step run: publish');
    });
  });
});

describe('An empty command based on foundry-release-base', function () {
  describe('running --spec-version', function () {
    childUtils.exec('empty-plugin --spec-version');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the spec version', function () {
      expect(this.stdout).to.match(/^\d+\.\d+\.\d+$/);
    });
  });

  describe('running update-files', function () {
    childUtils.exec('empty-plugin update-files');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.match('');
    });
  });

  describe('running commit', function () {
    childUtils.exec('empty-plugin commit');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.match('');
    });
  });

  describe('running register', function () {
    childUtils.exec('empty-plugin register');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.match('');
    });
  });

  describe('running publish', function () {
    childUtils.exec('empty-plugin publish');

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.match('');
    });
  });
});
