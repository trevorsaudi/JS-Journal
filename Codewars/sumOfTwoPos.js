// a function that computes the first smallest 2 elements
function sumTwoSmallestNumbers(numbers) {  
    //Code here
   return numbers.sort((a, b) => a - b).splice(0,2).reduce((acc,item)=>{
     return acc += item
    },0);
 
  }

  console.log(sumTwoSmallestNumbers([6,7,2,4,5,1,4])); //expected output is 3