const coding = ["js", "Java", "python", 'C++'];

// coding.forEach(function(vlaue){
//     console.log(vlaue);
    
// })

// coding.forEach((item) =>{
//     console.log(item);
    
// })

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe);

// coding.forEach((item, index, arr) =>{
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {
        languageName: "javaScript",
        languagefileName: "js",
    },
     {
        languageName: "java",
        languagefileName: "java",
    },
     {
        languageName: "python",
        languagefileName: "py",
    },
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
    
})