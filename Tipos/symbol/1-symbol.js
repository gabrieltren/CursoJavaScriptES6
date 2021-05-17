const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbol são unicos
console.log('symbol1 é igual a symbol2', symbol1 === symbol2);

const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Gabriel',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Trentini',

}

console.log(user);

// Subols criam propriedades que nao são enumerables
for(const key in user){
    if(user.hasOwnProperty(key)){
        console.log('\nValor da chave ${key}: ${user[key]}');
    }
}

console.log('Propriedades do objeto user:',Object.keys(user));
console.log('Valores das propriedades do objeto user', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbol registrados no objeto user', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades de um objeto
console.log('Todas propriedades do objeto user', Reflect.ownKeys(user));

// Criar u enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};