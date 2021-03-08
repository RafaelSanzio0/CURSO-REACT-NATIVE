class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano)  {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsoliddo = 0
        this.lancamentos.forEach(l =>{
            valorConsoliddo += l.valor
        })
        return valorConsoliddo
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(8,2020)
contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())