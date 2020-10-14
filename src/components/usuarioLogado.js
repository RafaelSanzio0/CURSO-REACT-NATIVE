import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import IF from './if'

export default props => {
    const usuario = props.usuario || {}

    return (
        <Fragment >
            <IF teste={usuario && usuario.nome && usuario.email}>
            <Text style={Estilo.txtG}>Usuário logado:</Text>
            <Text style={Estilo.txtG}>{usuario.nome} - {usuario.email}</Text>
            </IF>
        </Fragment>
    )
}

// SO VAI EXIBIR NO APP.JS O QUE ATENDER A CONDICAO DE NOME E EMAIL = TRUE OU SEJA PREENCHIDO
// COMPONENTE RELACIONADO A REDENRIZAÇÃO CONDICIONAL