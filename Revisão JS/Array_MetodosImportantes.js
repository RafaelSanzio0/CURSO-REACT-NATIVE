const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // add no ultimo elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // add no primeiro elemento
console.log(pilotos)

// slice pode add e remover elementos

// add
pilotos.splice(2,0,'bottas')
console.log(pilotos)

// remover
pilotos.splice(3,1,)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // cria um novo array a partir do indice passado
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4) // cria um novo array a partir do indice passado ate o limite de -1 no segundo parametro
console.log(algunsPilotos2)