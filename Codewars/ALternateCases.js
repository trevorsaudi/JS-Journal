// a function that alternates cases in a string supplied to it
String.prototype.toAlternateCase = function() {
    return this.split('').map(changeCase).join('');
}

function changeCase(char){
    if(char.toLowerCase() === char){
        return char.toUpperCase();
    }else{
        return char.toLowerCase();
    }
}

console.log("HelLo".toAlternateCase());