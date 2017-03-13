const assert = require('assert');
const noop = require('lodash.noop');

const foo = require('lib/foo');

describe('foo', function() {
  it('adds 1', function() {
    assert.equal(2, foo(1));
  });
});
