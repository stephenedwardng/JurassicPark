var assert = require('assert');
var Enclosure = require('../enclosure.js');
var Dinosaur = require('../dinosaur.js');

describe("Enclosure", function(){
  var dino1 = new Dinosaur("pterodactyl", 5);
  var dino2 = new Dinosaur("denver", 1);
  var dino3 = new Dinosaur("tyrannosaurous", 2);
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

});