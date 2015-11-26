Array.prototype.myUniq = function(){
  var uniqArray = [];
  this.forEach(function(elem){
    if (uniqArray.indexOf(elem) === -1){
      uniqArray.push(elem);
    }
  });

  return uniqArray;
};
// console.log([1,2,3,1].myUniq());

Array.prototype.twoSum = function(){
  var pairs = [];
  for(var i = 0; i < this.length - 1; i++){
    for(var j = i; j < this.length; j++){
      if (this[i] + this[j] === 0){
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

// console.log([-1,2,3,1].twoSum());

Array.prototype.myTranspose = function(){
  var cols = [];
  for(var i = 0; i < this.length; i++){
    for(var j = 0; j < this[i].length; j++){
      cols[j] = cols[j] || [];
      cols[j][i] = this[i][j];
    }
  }
  return cols;
};

var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]

console.log(rows.myTranspose());
