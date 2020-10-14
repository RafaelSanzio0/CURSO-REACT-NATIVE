import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'


export default function Comp1 (){ //quando é default nao precisa ser o nome da funcao na importacao
    return <Text style={Estilo.txtG}>Comp #01</Text>
}

export function Comp2 (){ //aqui precisa do nome exato no app.js
    return <Text style={Estilo.txtG} >Comp #02</Text>
}

export function Comp3 (){
    return <Text>Comp #03</Text>
}

