// Load in dependencies
var expect = require('chai').expect;
var quote = require('shell-quote').quote;
var childUtils = require('./utils/child');

// Start our tests
describe('A full command based on foundry-release-base', function () {
  var fullCommandArr = ['node', __dirname + '/test-files/full-command.js'];
  describe('running --spec-version', function () {
    childUtils.exec(quote(fullCommandArr.concat(['--spec-version'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the spec version', function () {
      expect(this.stdout).to.match(/^\d+\.\d+\.\d+\n$/);
    });
  });

  describe('running update-files', function () {
    childUtils.exec(quote(fullCommandArr.concat(['update-files', '1.0.0', 'Hello World!'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.equal('Step run: update-files 1.0.0 Hello World!\n');
    });
  });

  describe('running commit', function () {
    childUtils.exec(quote(fullCommandArr.concat(['commit', '1.0.0', 'Hello World!'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.equal('Step run: commit 1.0.0 Hello World!\n');
    });
  });

  describe('running register', function () {
    childUtils.exec(quote(fullCommandArr.concat(['register', '1.0.0', 'Hello World!'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.equal('Step run: register 1.0.0 Hello World!\n');
    });
  });

  describe('running publish', function () {
    childUtils.exec(quote(fullCommandArr.concat(['publish', '1.0.0', 'Hello World!'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.equal('Step run: publish 1.0.0 Hello World!\n');
    });
  });
});

describe('An empty command based on foundry-release-base', function () {
  var emptyCommandArr = ['node', __dirname + '/test-files/empty-command.js'];
  describe('running --spec-version', function () {
    childUtils.exec(quote(emptyCommandArr.concat(['--spec-version'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the spec version', function () {
      expect(this.stdout).to.match(/^\d+\.\d+\.\d+\n$/);
    });
  });

  describe('running update-files', function () {
    childUtils.exec(quote(emptyCommandArr.concat(['update-files', '1.0.0', 'Hello World!'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.equal('');
    });
  });

  describe('running commit', function () {
    childUtils.exec(quote(emptyCommandArr.concat(['commit', '1.0.0', 'Hello World!'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.equal('');
    });
  });

  describe('running register', function () {
    childUtils.exec(quote(emptyCommandArr.concat(['register', '1.0.0', 'Hello World!'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.equal('');
    });
  });

  describe('running publish', function () {
    childUtils.exec(quote(emptyCommandArr.concat(['publish', '1.0.0', 'Hello World!'])));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.equal('');
    });
  });
});
