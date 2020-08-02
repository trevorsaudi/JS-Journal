
// a function that counts the number of 1s in the bit conversion of an integer
var countBits = function(n) {

    // /0/g is a regex expression. 0 to match that character an g to represent a global search

    return n.toString(2).replace(/0/g, '').split('').length;
  
  };

  console.log(countBits(5))