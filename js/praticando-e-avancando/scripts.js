// Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(`${person.name} tem ${person.age} anos`)


// Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// acessar valores dentro do Array
//detalhes
console.log(animals)
    //Lion
console.log(animals[0])
    //Monkey
console.log(animals[1])
    //Monkey
console.log(animals[1])
    //3
console.log(animals.length)
    //cat
console.log(animals[2].name)
    // undefined
console.log(animals[1].name)

// 1. Declare uma variável de nome weight

let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)
    // resultado: undefined

/*
    3. Declare uma variável e atribua valores para cada
    um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: true or false (boolean)
*/

let name = "Ana"
let age = 24
let stars = 4.8
let isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de
    dados?

    4.1 Atribua a ela as mesmas propriedades e valores
    do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos
        valores de cada propriedade do objeto
*/

let student = {

    name: "Ana",
    age: 24,
    weight: 70.8,
    isSubscribed: true,
};

console.log(typeof student)

console.log(student)
    // resultado: object

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome
    students e atribua a ela nenhum valor, ou seja,
    somente o Array vazio
*/

let students = []


/* 
    6. Retribua valor para a variável acima, colocando
    dentro dela o objeto student da questão 4. (Não
    copiar e colar o objeto, mas usar o objeto criado e
    inserir ele no Array)
*/

students = [
    student
]
console.log(students)

/* 
    7. Coloque no console o valor da posição zero do
    Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do
    Array students
*/

const john = {
    name: "John",
    age: 23,
    weight: 74.8,
    isSubscribed: true,
};

students = [
    student,
    john
]

// outro jeito de fazer: students[1] = john
console.log(students)



/*
    9. Sem rodar o código responda qual é a respota do
    código abaixo e por que? Após sua resposta, rode o 
    código e veja se você acertou.

    console.log(a)
    var a = 1
*/

// resposta undefined 

console.log(a)
var a = 1