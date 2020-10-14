import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default ({nome, sobrenome}) => {

    return (
       <Fragment>
            <Text style={Estilo.txtG}>
                {nome} {sobrenome}
            </Text>
       </Fragment>
    )
}