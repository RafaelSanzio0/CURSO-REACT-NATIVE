const notas = [1, 2, 3, 4, 5]

let resultado = notas.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = notas.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)


/* MAP PERCORRE E TRANSFORMA UM EM UM NOVO ARRAY */