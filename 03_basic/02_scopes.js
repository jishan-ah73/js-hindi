
let a = 30;
const b = 40;
var c = 50;


if(true){
    let a = 40;
    // console.log("inner ", a);
    
}
console.log(a);

function one(){
    const username = "joker"

    function two(){
        const website = "Github";
        console.log(username);
    }
    // console.log(website);
    two()    
}
// one();

if(true){
    const username = "janwaar"
    if(username === "janwaar"){
        const website = " youtube"
        console.log(username + website);  
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++  interesting +++++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num+1
}

// console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}
