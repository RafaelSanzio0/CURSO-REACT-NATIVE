const pessoa = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal!',
        numero: 123
    }
}

//Estou retirando os atributos de dentro do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

//Estou retirando os atributos de dentro do objeto pessoa e atribuindo um novo nome
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Acessando atributos para o objeto pessoa ** irei receber undefined para o 1 atributo pois ele não existe no objeto e nem tem um valor sendo atribuido
const  { sobrenome, bemHumodara = true } = pessoa
console.log(sobrenome, bemHumodara)

// Acessando atributos para o objeto endereço aninhado do objeto pessoa
const { endereco: { logradouro,numero,cep } } = pessoa
console.log(logradouro, numero, cep)

// Acessando atributos de um objeto aninhando inexistente ** isso me retorna um erro, garante que sempre o caminho que vc quer desestruturar exista!
const { conta: { agencia, numero_conta } } = pessoa
console.log(agencia, numero_conta)