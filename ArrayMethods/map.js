// the map function
// it executes a function on each element in an array and returns a new array
// the map function does not alter an array, instead, it creates a new array
// const numbers = [1,2,3,4,5];

const products = [

{
    name: "Laptop",
    price: 1000,
    count: 3

},
{
    name: "desktop",
    price: 1500,
    count: 5
},
{
    name: "phone",
    price: 500,
    count: 10
}

]


const totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count

}));

console.log(totalProductsValue)




// example 2
// function double(value, index, arr){
//     return value * 2;
// }

// function multiply(value, index, arr){
//     return value * index;
// }
// console.log(numbersDouble);

// example 3
const strings = ["1","2","3","4"];

// calling the number constructor converts a string of numbers to int
const numbers  = strings.map(Number);

console.log(strings)
console.log(numbers)

