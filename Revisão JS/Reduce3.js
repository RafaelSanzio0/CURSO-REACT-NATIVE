Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))


// desafio é obter a media de nota dos alunos pelo paradigma declarativo
const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: true },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: false },
    {nome: 'Ana', nota: 8.7, bolsista: true },
]

const getNota = a => a.nota
const somaNota = (acumulador, valorAtual) => acumulador + valorAtual

resultado = alunos.map(getNota).reduce(somaNota)
console.log(resultado / alunos.length)