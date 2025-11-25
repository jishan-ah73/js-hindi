// data type 
// there are two data type 
// 1 primitive ddta type 

// Number, String, Boolean, Symbole, null, defined,

// non primtiive 
// array, object, function


  // stack(primitive) , heap(non primitive)

  let name = "ahamd";
  let anotername = name;
  anotername = "jishan";
//   console.log(name)
//   console.log(anotername);
  
let userOne = {
    email: "joker@gmail.com",
    username: "ahmad",
}

let usertwo = userOne;
userOne.email = "joke@gmail.com";
console.log(usertwo.email);
console.log(userOne.email);

