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

// 2. Que tipo de dado é a variável acima?

/*
    3. Declare uma variável e atribua valores para cada
    um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/

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

/*
    5. Declare uma varia´vel do tipo Array, de nome
    students e atribua a ela nenhum valor, ou seja,
    somente o Array vazio
*/

/* 
    6. Retribua valor para a variável acima, colocando
    dentro dela o objeto student da questão 4. (Não
    copiar e colar o objeto, mas usar o objeto criado e
    inserir ele no Array)
*/

/* 
    7. Coloque no console o valor da posição zero do
    Array acima
*/


/*
    8. Crie um novo student e coloque na posição 1 do
    Array students
*/

/*
    9. Sem rodar o código responda qual é a respota do
    código abaixo e por que? Após sua resposta, rode o 
    código e veja se você acertou.

    console.log(a)
    var a = 1
*/