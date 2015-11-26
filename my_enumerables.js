Array.prototype.myEach = function(blk){
  for (var i = 0; i < this.length; i++){
    blk(this[i]);
  }
  return this;
};
[1,2,3,4].myEach(console.log);
