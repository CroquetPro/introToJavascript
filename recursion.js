function factorial(n){
  if (n === 0){
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}
// console.log(factorial(5));

function range(start, end){
  if (end < start){
    return [];
  }
  if (start === end){
    return [end]
  }
  else {
    return [start].concat(range(start+1, end));
  }
}

// console.log(range(0,10));

function exponentiation(base, power){
  if (power === 0){
    return 1;
  }
  else {
    return base * exponentiation(base, power - 1);
  }
}

console.log(exponentiation(2,5));
