var Enclosure = function(){
  this.dinosaurs = [];
};

Enclosure.prototype = {
  addDinosaur: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  },

  cullType: function(type){
    for (dinosaur of this.dinosaurs) {
      if (dinosaur.type === type) {
        var index = this.dinosaurs.indexOf(dinosaur);
        this.dinosaurs.splice(index, 1);
      }
    }
  },

  offspringMoreThan2: function(){
    var offspringMoreThan2 = [];
    for (dinosaur of this.dinosaurs) {
      if (dinosaur.offspring > 2) {
        offspringMoreThan2.push(dinosaur);
      }
    }
    return offspringMoreThan2;
  },

  predictPopulation: function(years, startingNumber){
    var population = startingNumber * this.dinosaurs.length;
    for (dinosaur of this.dinosaurs) {
      population += dinosaur.offspring * years * startingNumber;
    }
    return population;
  }

}

module.exports = Enclosure;