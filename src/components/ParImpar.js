import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

// RENDERIZAÇÃO CONDICIONAL 01
// é como se fosse o if ternario dentro de uma view

export default ({num = 0}) => {

    return (
        <View>
            <Text style={Estilo.txtG}>O resultado é: </Text>
            {num % 2 === 0
                ? <Text style ={Estilo.txtG}>Par</Text>
                : <Text style ={Estilo.txtG}>Impar</Text>
            }
        </View>
    )
}