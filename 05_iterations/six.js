 const coding = ["javaScript", "java", "ruby", "python"];

//  const values = coding.forEach((item) =>{
//     // console.log(item);
//     return item
    
//  })
//  console.log(values);
 

const myNum = [1,2,3,4,5,6,7,8,9];

// let newNumbs = myNum.filter((nums) => nums > 4);
// console.log(newNumbs);

// let newNumbs = myNum.filter((nums) => {
//     return nums > 4
// });

const newNumbs = []
myNum.forEach((num) =>{
    if(num > 4){
        newNumbs.push(num);
    }
})

  console.log(newNumbs);

