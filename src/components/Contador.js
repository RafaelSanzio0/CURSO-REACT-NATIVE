import React, { Fragment, useState } from 'react'
import { Button, Text } from 'react-native'
import Estilo from './estilo'

export default ({inicial = 0, passo = 1}) => {
    //let numero = props.inicial
    const [numero, setNumero] = useState(inicial)

    const increment = () => setNumero(numero + passo)
    
    const decrement = () => setNumero(numero - passo)
    
    return(
        <Fragment>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={increment}/>
            <Button title="-" onPress={decrement}/>
        </Fragment>
    )
}