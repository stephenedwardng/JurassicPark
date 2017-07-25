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

  }

}

module.exports = Enclosure;