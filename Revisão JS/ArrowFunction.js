let dobro = function (a){ // função normal
    return 2 * a
}

dobro = (a) => { // a mesma função como arrow function
    return 2 * a
}

dobro = a => 2 * a // pode-se escrever também desta maneira, quando a sua função faz exclusivamente apenas 1 coisa

console.log(dobro(Math.PI))



let ola = function () {
    return 'olá'
}

ola = () => 'olá' // exemplo de arrow function sem parametro
ola = _ => 'olá' // com parametro mas pode ser chamado sem passar nada

console.log(ola())