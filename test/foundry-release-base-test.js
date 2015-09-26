// Load in dependencies
var expect = require('chai').expect;
var quote = require('shell-quote').quote;
var childUtils = require('./utils/child');

// Start our tests
describe('A full command based on foundry-release-base', function () {
  describe('running --spec-version', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/full-command.js', '--spec-version']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the spec version', function () {
      expect(this.stdout).to.match(/^\d+\.\d+\.\d+$/);
    });
  });

  describe('running update-files', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/full-command.js', 'update-files']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match('Step run: update-files');
    });
  });

  describe('running commit', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/full-command.js', 'commit']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match('Step run: commit');
    });
  });

  describe('running register', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/full-command.js', 'register']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match('Step run: register');
    });
  });

  describe('running publish', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/full-command.js', 'publish']));

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
  describe.only('running --spec-version', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/empty-command.js', '--spec-version']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the spec version', function () {
      expect(this.stdout).to.match(/^\d+\.\d+\.\d+$/);
    });
  });

  describe('running update-files', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/empty-command.js', 'update-files']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.match('');
    });
  });

  describe('running commit', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/empty-command.js', 'commit']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.match('');
    });
  });

  describe('running register', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/empty-command.js', 'register']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.match('');
    });
  });

  describe('running publish', function () {
    childUtils.exec(quote(['node', __dirname + '/test-files/empty-command.js', 'publish']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.match('');
    });
  });
});
