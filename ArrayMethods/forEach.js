// practising the foreach loop

const elements = [20,30,40,50,60];
const letter = ['a','b','c','d','a','d'];
// an object that keeps track of all the letters
let count = {};
let sum =0;


letter.forEach(item =>{

    if(count[item]){
        count[item]++;
      
    }else{
        count[item] = 1;
    }

})



/*
this function does the same thing as the one above

function count (string){
//   a function to store the elements we are counting
  let count = {};

  let elements = string.split('');
  
  elements.forEach(element => {
   count[element] = count[element] ? count[element] + 1 : 1;
  });
  
 
  return count;
  
}
*/


console.log(count);

// 1. printing each element
// elements.forEach((item, index, arr) => {
//     console.log("a["+ item+ "]" + " = " + index);
    
//     });
    

// 2. finding the sum of elements
// elements.forEach(item =>{
//     sum += item;
// })

// console.log(sum);














// the foreach loop takes in a callback function with 3 params, item, index, arr
/*
function consoleItem(item, index, arr){
    console.log("a["+ item+ "]" + " = " + index);
    
    }

    this funnction can be passed in as the callback to forEach
*/




