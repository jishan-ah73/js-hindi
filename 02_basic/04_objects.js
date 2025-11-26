

const eqularUser = {
    email: "jokerjan@gmial.com",
    fullname: {
        username: {
            firstname: "joker",
            lastname: "jan",
        }
    }
    
}
// console.log(eqularUser.fullname.username);

const obj1 = {1: "a", 2: "B"};
const obj2 = {3: "a", 4: "B"};

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const course = {
    coursename: "JavaScript in hindi",
    price: "999",
    couserInstractor: "hitesh",
}

const {couserInstractor} = course;
console.log(couserInstractor);



