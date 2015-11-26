Array.prototype.myEach = function(blk){
  for (var i = 0; i < this.length; i++){
    blk(this[i]);
  }
  return this;
};
// [1,2,3,4].myEach(console.log);


Array.prototype.myMap = function(blk){
  var mapped = [];
  this.myEach(function(elem){
    mapped.push(blk(elem));
  });

  return mapped;
};
var arr = [1,2,3,4];
arr.myMap(function (el) {
    console.log(el);
});
console.log(arr);
