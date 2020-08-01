// going through the slice array
const numbers = [1,2,4,5,6];

const numbers2 = numbers.slice(1,4);
const numbers3 = numbers.slice(-3); //providing a negative number starts from the end
const numbers4 = numbers.slice(1); //all the items starting from a particular index
// the last index is not included in the slice

console.log(numbers2);
console.log(numbers3);
console.log(numbers4);

