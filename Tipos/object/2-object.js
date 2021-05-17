const user = {
    name: 'Gabriel',
    lastName: 'Trentini'
};

// Recupera as chaves do objeto
console.log('Propriedades do objeto user', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user', Object.values(user));

// Retora um array de arrarys contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//Mergear propriedades de objeto
Object.assign(user, {fullName: 'Gabriel Trentini'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergando dois ou mais objetos', Object.assign({}, user, {age: 26}));

// Previne todas as alteraçoes em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

// Permite apenas a alteração de propriedades existente em um objeto
const person = {name : 'Gabriel'};
Object.seal(person);
