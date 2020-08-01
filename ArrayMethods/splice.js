// going thru the splice method
// returns an array with the removed items
const numbers = [1,2,3,4,5];

// removing the last three elements form the array
// starting index of removing the elements, number of items we want to remove
const deleted = numbers.splice(2,3);

// using the splice method to add elements into the array
// the splice method will always change the original elements
// not the best way to add elements into an array
const push = numbers.splice(2,0,1,2,3)

console.log(numbers);
console.log(deleted);
console.log(push);


