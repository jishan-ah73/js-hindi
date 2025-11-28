const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc, currValue){
//     console.log(`acc: ${acc} and currValur: ${currValue}`);
    
//     return acc + currValue
// },0);

const myTotal = myNums.reduce((acc,currValue) => acc+ currValue,0)
console.log(myTotal);
