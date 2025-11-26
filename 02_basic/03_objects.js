
const mySym = Symbol("key1");

const JsUser = {
    name: "ahmad",
    "full name": "joker jan",
    age: 23,
   [ mySym]: "mykey1",
    city: "Lucknow",
    email: "joker@gmial.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],
}
console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "jokerwarr@gmail.com";
// console.log(JsUser["email"]);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello Js User ${this.name}` );
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



