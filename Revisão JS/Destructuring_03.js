function rand([min = 0, max = 100]){ 
    if (min > max) [min ,max] = [max, min] //garante que sempre teremos min e max na ordem de grandeza correta
    let valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}


console.log(rand([50,60])) //passando direto o valor min e max
console.log(rand([90])) // passando direto o valor min
console.log(rand([,5])) // passando direto o valor max
console.log(rand([])) // assumindo o valor padrao setado na function
console.log(rand()) // sem as chaves não pode, da erro !!!
