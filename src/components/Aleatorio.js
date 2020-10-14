import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

randomNumber = (min, max) => { 
    return Math.round((Math.random() * (max - min) + min));
}

export default props => (
    <Text style={Estilo.txtG}>
        O valor aleátorio gerado é {randomNumber(1,60)}
    </Text>
)