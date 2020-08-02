// finding the difference between 2 arrays
// elements in a that aren't in b
function arrayDiff(a, b) {
    return a.filter(value => !b.includes(value)); 
}


console.log(arrayDiff([3,4], [3]));