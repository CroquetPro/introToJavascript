function bubbleSort(arr){
  var sorted = false;
  while (!sorted){
    sorted = true;
    for(var i = 0; i < arr.length - 1; i++){
      if (arr[i] > arr[i+1]){
        sorted = false;
        var tmp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2,1,4,0,5]));

function substrings(string){
  var substr = [];
  for(var i = 0; i < string.length - 1; i++){
    for(var j = i + 1; j <= string.length; j++){
      substr.push(string.slice(i, j));
    }
  }
  return substr;
}

console.log(substrings("cat"));
