// a function that displays non consecutive digits and their index in an array
function allNonConsecutive (arr) {
  
    let filtered = []
    
    arr.forEach((num,idx) => {
      if(idx > 0){
      if((arr[idx] - arr[idx-1]) != 1){
        filtered.push({i:idx,n: arr[idx]})
        
        }
        }
         
         })
       return filtered
   
    }
    

    console.log(allNonConsecutive([1,2,3,4,5,7,8]))