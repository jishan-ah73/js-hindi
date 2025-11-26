

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
    
// }

//  function addTwoNumber(number1, number2){
//      let result = number1 + number2
//     return result
// }
// const result = addTwoNumber(2, 6)
// console.log(result);

function loginUserMessage(username){
    if(username === undefined){
        // console.log("please enter your username");
        return
        
    }
    // return `${username} just logged in` 
}
// console.log(loginUserMessage("ahmad"));

// console.log(loginUserMessage());

function calculatCardPrise(...num1){
    return num1
}
// console.log(calculatCardPrise(200,400,500));

const user = {
    username: "ahmad",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject({
//     username: "joker",
//     price: 399,
// })

// handleObject(user);

const mynewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(mynewArray));

