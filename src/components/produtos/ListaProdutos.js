import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos'
import Produtos from './produtos'

export default props => {
    function listaProdutos() {
        return produtos.map(p => {
            return <Text key={p.id}> {p.id }) {p.nome} tem o valor R$ {p.preco}</Text>})
        }
    
    return (
        <Fragment>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            {listaProdutos()}
       </Fragment>
    )
}

// IREMOS REDENRIZAR UM LISTA DE PRODUTOS (JSX)
// BOA PRATICA É COLOCAR UMA KEY SEMPRE QUE HOUVER UMA LISTA DE COMPONENTES PARA FUTURAS DELECOES OU MODIFICACOES FUTURAS FILTRANDO POR KEY