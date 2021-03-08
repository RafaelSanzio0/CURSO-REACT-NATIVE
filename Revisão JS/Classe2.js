class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // os 2 geram uma função e por baixo estamos gerando um relação de protótipo que é a forma que o JS trabalha com Herança
    constructor(sobrenome, profissao = 'QA') {
        super(sobrenome) // com super estou chamando o construdor de Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva') // passa o valor silva para o Pai e o Pai passa para o Avo
    }
}

const filho = new Filho
console.log(filho)