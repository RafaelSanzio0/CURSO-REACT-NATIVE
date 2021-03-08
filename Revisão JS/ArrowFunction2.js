function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade ++
        console.log(this.idade)
    },1000)
}

new Pessoa

/* COMO ESTAMOS UTILIZANDO UMA ARROW FUNCTION O CONTEXTO DE THIS NÃO MUDA, MESMO SENDO CHAMADO DENTRO DE UM OUTRO CONTEXTO QUE É O SETINTERVAL */