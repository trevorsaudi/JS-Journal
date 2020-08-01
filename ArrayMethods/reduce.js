// the reduce method 
// executes a callback function and returns one single output
// example1
const numbers = [1,2,3,4,5];


// takes in two parameters, a callback function and the initial value
const total = numbers.reduce((sum),0);

// the callback function takes in 4 parameters
// the accumulator keeps track of the value we return at the end
// initialized with the initial value declared at the top 
function sum(accumulator,value,index,arr){
    return accumulator + value;    
}

console.log(total);

// example2
// to get the maximum from an array

const numbers2 = [1,2,3,4,5];

const max = numbers2.reduce(callback , -Infinity);

function callback(accumulator,value){

    if(accumulator > value){
        return accumulator;
    }else{
        return value;
    }
}

console.log(max);



// example 3

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
// write a reduce function to calculate the total price of the products

const totalProducts = products.reduce((acc,item)=>{
    return acc + item.price * item.count;
},0);

console.log(totalProducts)


// i am finally getting the hang of this shit
