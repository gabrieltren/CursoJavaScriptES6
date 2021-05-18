const users = ['Gabriel', 'John', 'Flav'];

const gender = {
    MAM = Symbol('M'),
    WOMAN = Symbol('W')
};

const person = [
    {
        name: 'Gabriel',
        age: 23,
        gender: gender.MAM
    },
    {
        name: 'John',
        age: 25,
        gender: gender.MAM
    },
    {
        name: 'Flav',
        age: 21,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de intens de um array
console.log(person.length());

// Verificar se é array
console.log(Array.isArray(person));

// Interar os itens do array
person.forEach(person => {
    console.log('Nome: ${person.name}');
});
// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAM);
console.log(mens);

// Retornr um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introduçao ao JavaScript';
    return person;
});

console.log(personsWithCourse);

// Transforma um rarray em outro tipo 
const totalAge = persons.reduce((age, person) =>{
    age += person.age;
    return age;
}, 0);

console.log(totalAge);

// Juntando operaçoes
const totalEvenAges = persons
                            .filter(person => person.age % 2=== 0)
                            .reduce((age, person) =>{
                                age += person.age;
                                return age;
                            }, 0);
                    

console.log(totalEvenAges);
