// Load in dependencies
var expect = require('chai').expect;
var childUtils = require('./utils/child');

// Start our tests
describe('A full command based on foundry-release-base', function () {
  var fullCommandArr = [__dirname + '/test-files/full-command.js'];
  describe('running --spec-version', function () {
    childUtils.spawn('node', fullCommandArr.concat(['--spec-version']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the spec version', function () {
      expect(this.stdout).to.match(/^\d+\.\d+\.\d+\r?\n$/);
    });
  });

  describe('running update-files', function () {
    childUtils.spawn('node', fullCommandArr.concat(['update-files', '1.0.0', 'Hello World!']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match(/^Step run: update-files 1.0.0 Hello World!\r?\n$/);
    });
  });

  describe('running commit', function () {
    childUtils.spawn('node', fullCommandArr.concat(['commit', '1.0.0', 'Hello World!']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match(/^Step run: commit 1.0.0 Hello World!\r?\n$/);
    });
  });

  describe('running register', function () {
    childUtils.spawn('node', fullCommandArr.concat(['register', '1.0.0', 'Hello World!']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match(/^Step run: register 1.0.0 Hello World!\r?\n$/);
    });
  });

  describe('running publish', function () {
    childUtils.spawn('node', fullCommandArr.concat(['publish', '1.0.0', 'Hello World!']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the expected text', function () {
      expect(this.stdout).to.match(/^Step run: publish 1.0.0 Hello World!\r?\n$/);
    });
  });
});

describe('An empty command based on foundry-release-base', function () {
  var emptyCommandArr = [__dirname + '/test-files/empty-command.js'];
  describe('running --spec-version', function () {
    childUtils.spawn('node', emptyCommandArr.concat(['--spec-version']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('returns the spec version', function () {
      expect(this.stdout).to.match(/^\d+\.\d+\.\d+\r?\n$/);
    });
  });

  describe('running update-files', function () {
    childUtils.spawn('node', emptyCommandArr.concat(['update-files', '1.0.0', 'Hello World!']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.equal('');
    });
  });

  describe('running commit', function () {
    childUtils.spawn('node', emptyCommandArr.concat(['commit', '1.0.0', 'Hello World!']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.equal('');
    });
  });

  describe('running register', function () {
    childUtils.spawn('node', emptyCommandArr.concat(['register', '1.0.0', 'Hello World!']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.equal('');
    });
  });

  describe('running publish', function () {
    childUtils.spawn('node', emptyCommandArr.concat(['publish', '1.0.0', 'Hello World!']));

    it('has no errors', function () {
      expect(this.err).to.equal(null);
      expect(this.stderr).to.equal('');
    });

    it('has no output', function () {
      expect(this.stdout).to.equal('');
    });
  });
});

describe('An error-prone command command based on foundry-release-base', function () {
  var emptyCommandArr = [__dirname + '/test-files/error-command.js'];

  describe('running update-files (thrown)', function () {
    childUtils.spawn('node', emptyCommandArr.concat(['update-files', '1.0.0', 'Hello World!']));

    it('has a non-zero exit code', function () {
      expect(this.err).to.not.equal(null);
    });

    it('has stderr output', function () {
      expect(this.stderr).to.contain('Error thrown: updateFiles 1.0.0 Hello World!');
    });
  });

  describe('running commit (callback)', function () {
    childUtils.spawn('node', emptyCommandArr.concat(['commit', '1.0.0', 'Hello World!']));

    it('has a non-zero exit code', function () {
      expect(this.err).to.not.equal(null);
    });

    it('has stderr output', function () {
      expect(this.stderr).to.contain('Error callback: commit 1.0.0 Hello World!');
    });
  });
});
