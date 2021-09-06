let arr =  [3,5,7];
arr.foo = "hello";

for(let i in array){
    console.log(i);         // logs "0", "1", "2", "foo" 
}

for(let i of array){
    console.log(i);         // logs "3", "5", "7"
}