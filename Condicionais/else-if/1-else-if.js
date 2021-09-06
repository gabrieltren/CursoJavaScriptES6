/*

if (condition){
    //code
}else if (condition){
    // code
}

*/

const array = [0, 1, 2, 3, 4, 5, 6, 8, 10, 15];


console.log('\nelse if');
array.forEach(item =>{
    if (item % 2 == 0){
        console.log(`o numero ${item} é divisivel por 2`);
    }else if (item % 3 == 0){
        console.log(`o numero ${item} é divisivel por 3`);
    }else if (item % 5 ==0){
        console.log(`o numero ${item} é divisivel por 5`);
    }else{
        console.log(`o numero ${item} não é divisivel nem por 2, 3 e 5`);
    }
});
