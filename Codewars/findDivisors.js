function divisors(integer) {
  
    let numbers = [];
    
    for (let i = 2; i < integer; i++){
  
      if(integer % i === 0){
        numbers.push(i);
      }
    
  }
    if (numbers.length == 0) {
        return `${integer} is prime` 
    }
    
    return numbers;
    }


   console.log(divisors(9));