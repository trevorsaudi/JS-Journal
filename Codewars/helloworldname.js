// 
function hello(name) {
  console.log(name)
  if(name === undefined || name === ""){
         return 'Hello, World!'
    
  }
  else 
  return `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}!`;

}
// 
console.log(hello("trEvor")) //expected output Hello, Trevor!