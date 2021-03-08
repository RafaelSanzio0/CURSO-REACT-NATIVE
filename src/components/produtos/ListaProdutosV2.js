import React, { Fragment } from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos'

export default props => {
    return (
        <Fragment>
            <Text style={Estilo.txtG}>Lista de Produtos V2</Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({item: p}) =>{
                    return <Text>{p.id} {p.nome}</Text>
                }}
            />
       </Fragment>
    )
}

// IREMOS REDENRIZAR UM LISTA DE PRODUTOS (JSX)
// AQUI NO CASO NÃO PRECISEI criar UM MAP DOS PRODUTOS POR CONTA DO FLATLIST
// no outro EXEMPLO EU CHAMO A FUNÇÃO QUE RENDERIZA OS ELEMENTOS
// NESSE CASO O PROPRIO FLATLIST CHAMA PRA KD UM DOS ELEMENTOS A FUNCAO DE REDENRIZAR