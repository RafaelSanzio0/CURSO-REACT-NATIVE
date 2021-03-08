Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados =  ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nomeAprovado, indice, array){
    console.log(`${indice + 1}) ${nomeAprovado}`)
    console.log(array)
})


/* IMPLEMENTADO NOSSO PROPRIO FOREACH */
