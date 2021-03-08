function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function() { // iremos receber um NaN comor resultado pois o this não está no contexto pessoa e sim no contexto do método setInterval
        self.idade++
        console.log(this.idade)
    }.bind(this), 1000) // setInterval faz com que a cada 1000 ms a função anonima seja disparada incrementando a idade
}

new Pessoa //criando a instancia do objeto Pessoa onde se encontra o método que vai ser chamado instantaneamente

/* NESTE CASO TEMOS DUAS SOLUÇOES, UTILIZANDO O BIND NO FINAL DO MÉTODO OU REFERENCIADO O SELF PARA THIS E LOGO EM SEGUIDA CHAMAR O ATRIBUTO SELF DENTRO DA FUNÇÃO SETINTERVAL POIS COMO SELF FOI DEFINIDO DENTRO DE PESSOA O VALOR DELE DE NUNCA IRÁR MUDAR
NO CASO EU DEIXEI OS 2, MAS OPTE POR APENAS UM*/