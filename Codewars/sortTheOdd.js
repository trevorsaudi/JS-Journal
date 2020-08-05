// sort odd numbers in an array while the even ones remain in place
function sortArray(array) {

    // Return a sorted array.
    
    let even = []
    let odd = []
    let result = []
    
    for(let i = 0 ; i< array.length; i++){
    if (array[i] % 2 === 0){
      even.push(array[i])
      }else
      odd.push(array[i])
    }
    odd.sort((a, b) => a - b);
  for(let i = 0 ; i< array.length; i++){
       if (array[i] % 2 === 0){
    result.push(even.shift())
      }else
      result.push(odd.shift())
    }
    
    return result
    
    
    
  }
  
  console.log(sortArray([5, 3, 2, 8, 1, 4]))  // expected output [1, 3, 2, 8, 5, 4]
 