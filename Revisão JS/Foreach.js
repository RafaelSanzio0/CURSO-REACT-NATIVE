const aprovados =  ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nomeAprovado, indice, array){
    console.log(`${indice + 1}) ${nomeAprovado}`)
    console.log(array)
})

aprovados.forEach(nomeAprovado => console.log(nomeAprovado))

const exibirAprovados = nomeAprovado => console.log(nomeAprovado)

aprovados.forEach(exibirAprovados)

/* FOREACH APENAS PERCORRE */