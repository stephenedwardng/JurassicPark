var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function () {
  var dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur("Triceratops", 2);
  });

  it('get type', function () {
    assert.strictEqual(dinosaur.type, "Triceratops");
  });

  it('get offspring', function () {
    assert.strictEqual(dinosaur.offspring, 2);
  });

});
