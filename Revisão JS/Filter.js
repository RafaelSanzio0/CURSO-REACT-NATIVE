/* FILTER PERCORRE E FILTRA OS DADOS DE ACORDO COM A REGRA DE NEGOCIO */

const produtos = [
    { "nome": "Borracha", "preco": 3.4, fragil: true },
    { "nome": "Caderno", "preco": 13.90, fragil: true },
    { "nome": "Kit de Lapis", "preco": 41.22, fragil: true },
    { "nome": "Caneta", "preco": 7.50, fragil: false }
]

const apenasFragil = produto => produto.fragil === true
const precoMaior10 = produto => produto.preco > 10.00

// assim
console.log(produtos.filter(function(p) {
    return apenasFragil(p) && precoMaior10(p)
}))

// ou assim
console.log(produtos.filter(apenasFragil).filter(precoMaior10))