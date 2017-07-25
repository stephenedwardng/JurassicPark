var assert = require('assert');
var Enclosure = require('../enclosure.js');
var Dinosaur = require('../dinosaur.js');

describe("Enclosure", function(){
  var dino1 = new Dinosaur("pterodactyl", 1);
  var dino2 = new Dinosaur("denver", 3);
  var dino3 = new Dinosaur("tyrannosaurous", 5);
  var enclosure;

  beforeEach(function(){
    enclosure = new Enclosure();
    enclosure.addDinosaur(dino1);
    enclosure.addDinosaur(dino2);
    enclosure.addDinosaur(dino3);
  });

  it('add dinosaur', function(){
    enclosure.addDinosaur(new Dinosaur("raptor", 2));
    assert.strictEqual(enclosure.dinosaurs.length, 4);
  });

  it('cull dinosaur type', function(){
    enclosure.cullType("pterodactyl");
    assert.strictEqual(enclosure.dinosaurs.length, 2);
  });

  it('get dinosaurs with offspring > 2', function(){
    assert.strictEqual(enclosure.offspringMoreThan2(), "How do I represent in the test these two objects I am returning?");
  });

  it('predict population after 1 year with 1 of each type', function(){
    assert.strictEqual(enclosure.predictPopulation(1, 1), 12);
  });

  it('predict population after 2 years with 1 of each type', function(){
    assert.strictEqual(enclosure.predictPopulation(2, 1), 21);
  });

  it('predict population after 2 years with 2 of each type', function(){
    assert.strictEqual(enclosure.predictPopulation(2, 2), 42);
  });

});