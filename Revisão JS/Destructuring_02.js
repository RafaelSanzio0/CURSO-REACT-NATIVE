function rand({min = 0, max = 100}){ // passando um objeto para a função e ao inves de aceesar obj.min ou obj.max posso simplismente acessar min ou max
    let valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

// Consigo atribuir a uma variavel ou passar direto na função o valor desejado do atributo
let obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955})) //aqui no caso ele assume o valor padrao para max
console.log(rand({})) // ou no caso não passar nada
console.log(rand()) // sem os colchetes não pode, da erro !!!
