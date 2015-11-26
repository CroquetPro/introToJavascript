function myUniq(array){
  var uniqArray = [];
  array.forEach(function(elem){
    if (uniqArray.indexOf(elem) === -1){
      uniqArray.push(elem);
    }
  });

  return uniqArray;
}
// console.log(myUniq([1,2,3,1]));

function twoSum(array){
  var pairs = [];
  for(var i = 0; i < array.length - 1; i++){
    for(var j = i; j < array.length; j++){
      if (array[i] + array[j] === 0){
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}

// console.log(twoSum([-1,2,3,1]));

function myTranspose(rows){
  var cols = [];
  for(var i = 0; i < rows.length; i++){
    for(var j = 0; j < rows[i].length; j++){
      cols[j] = cols[j] || [];
      cols[j][i] = rows[i][j];
    }
  }
  return cols;
}

var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]

console.log(myTranspose(rows));
