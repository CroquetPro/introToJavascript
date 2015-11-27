function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  console.log(this.owner + " loves " + this.name);
};

var cat1 = new Cat("fluffy", "Sheri");
cat1.cuteStatement();

Cat.prototype.cuteStatement = function(){
  console.log("Everyone loves " + this.name);
};

cat1.cuteStatement();

Cat.prototype.meow = function(){
  console.log("Meowmix plz deliverz");
};

cat1.meow();

var cat2 = new Cat("puss", "Ben");
cat2.meow = function() {
  console.log("I Hate Mondays");
};

cat2.meow();
cat1.meow();
