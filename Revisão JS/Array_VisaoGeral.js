let aprovados = new Array('Rafa','Jane','Jay') // forma não recomendada
console.log(aprovados)

aprovados = ['Rafa','Jane','Jay'] // forma recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // ao inves de dar erro como no JAVA ele define como undefined

aprovados[2] = 'Paulo' // metodo comum para substituir um elemento do indice
aprovados.push('Korona')

console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'ultimo' // com isso ele deixa os indices ate o 9 como undefined
console.log(aprovados)
console.log(aprovados.sort()) // ele realmente altera o array, ao inves de retorna um novo 

delete aprovados[1] // deleta o indice 1 mas não reordena o array
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,2,'novo elemento 1','novo elemento 2', 'novo elemento 3') // o splice serve para add elementos em um determinado indice e também para remover e também para add e remover ao mesmo tempo
// primeiro parametro indica da onde eu quero começar e o segundo de fato é o indice do elemento que vai ser removido E o 1,2,3 elemento indica que eu quero adicionar novos elementos
// e caso eu queira apenas add basta passar o valor 0 no segundo parametro
console.log(aprovados)
