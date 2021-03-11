export default {
    fontFamily: 'Lato',
    colors: {
        secindary: '#FFF',
        mainText: '#222',
        subText: '#555'
    }
}

/* export default é utilizado para criar módulos, e permitir que ao importar em outro arquivo, possa ser utilizado
 tudo que há naquele módulo
 outro fato é que por conta do default eu posso importar com qualquer nome em outros lugares como por exemplo
 import 'banana' from 'nome-do-modulo'.

 se fosse apenas export eu teria que especificar o nome exato como export nomeclass from 'nome-do-modulo' ou seja o export
 permite varias importacoes enquanto o export default só permiti uma
*/