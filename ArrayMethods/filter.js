// the filter method filters an array based on a callback function for elements returning a false value

// const numbers = [1,2,3,4,5,6,7];


// const even  = numbers.filter(isEven);

// function isEven(value){

//     return value % 2 === 0;

// }


// console.log(even)




const persons = [
    {
        name: "Trevor Saudi",
        age: 20,

    },  
    {
        name: "Tinashe Mwaniki",
        age: 15,
        
    }, 
     {
        name: "Janice Malu",
        age: 12,
        
    }, 
     {
        name: "Michael Muli",
        age: 17,
        
    }
]


const adult = persons.filter(person =>  person.age < 17);

console.log(adult);




const numbers = [1,1,1,3,4,5,6,7,7,8,4,3,9,11];


const nums  = numbers.filter((value,index, arr) =>  {
    return arr.indexOf(value) === index;  
    // the above line takes the array numbers, checks for its index, but since it always checks for the first occurence, it will return null for duplicate occurences
}
);



console.log(nums);