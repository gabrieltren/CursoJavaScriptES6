/*
switch (expressão) {
    case valor1:
        [break;]
    case valor2:
        [break;]
    
    default:
        [break;]
}


*/


const fruit = 'banana';

switch (fruit){
    case 'banana':
        console.log(`${fruit} R$ 3,00 / kg`)
        break;
    case 'mamao':
    case 'pera':
        console.log(`${fruit} R$ 2,00 / kg`)
        break;
    default:
        console.log("Produto não existe no estoque.")
        break;
}