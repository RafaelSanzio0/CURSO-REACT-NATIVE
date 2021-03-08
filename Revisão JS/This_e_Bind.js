const pessoa = {
    saudacao: 'bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar //o fato de armazenar em uma variavel altera o contexto do metodo falar (o this no caso) com isso recebemos undefined
falar() // conflito entre paradigmas: funcional e OO

const falarComBind = pessoa.falar.bind(pessoa) // o bind resolve isso para gente, mantendo o contexto do this sempre no lugar em que foi definido
falarComBind()