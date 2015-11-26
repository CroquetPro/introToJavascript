function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  console.log(this.owner + " loves " + this.name);
};

var cat1 = new Cat("fluffy", "Sheri");
cat1.cuteStatement();
