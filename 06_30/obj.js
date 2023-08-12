const Person = {
    name:'Ezequiel',
    age: 17,
    city: 'Boliva'
}

console.log(Person['name']+'\n'+Person.age);

Person.occupation = 'ingenierio en sistemas'
console.log(Person);

Person.saludo = () => 'Soy '+Person.name+' y tengo '+Person.age+' años'
console.log(Person.saludo());

const car = {
    marca: 'Byd',
    año: 2020
}
const carJSON = JSON.stringify(car)
console.log(carJSON);