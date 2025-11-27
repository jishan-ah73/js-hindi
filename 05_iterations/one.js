
// for of 

// const arr = [1,2,3,4,5];
// for (const nums of arr) {
//     // console.log(nums);
    
// }

const map = new Map()
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('fr', "France");
// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

// const myboject = {
//     game1: 'NFS',
//     gmae2: 'Spiderman',
// }
// for (const [key, vlaue] of myboject) {
//     // console.log(key, ':-', vlaue);
    
// }

const myObject = {
    js : 'JavaScript',
    cpp: 'C++',
    rb : 'Ruby',
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "java", "c++", "python"];

for (const key in programming) {
    console.log(programming[key]);
    
}