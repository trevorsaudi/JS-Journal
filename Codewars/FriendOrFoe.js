function friend(friends){
  //your code here
  
var persons = Array.from(friends);
let filterpersons = [];
  persons.filter((item)=>{
      
    if(item.split('').length === 4){
        filterpersons.push(item);
    };
      
  })
     return filterpersons;
  
}

console.log(friend(["Ryan", "Kieran", "Mark"]));


/*

Shorter version of the above, cleaner code
function friend(friends){
//   my second attempt at more cleaner code
  
  return friends.filter(friend => friend.length === 4);
  
  
}


*/