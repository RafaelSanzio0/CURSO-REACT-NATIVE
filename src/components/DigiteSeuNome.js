// CONCEITO DE COMPONENTE CONTROLADO

import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')              //definindo um componente controlado associando esse valor a variavel nome do textInput 

    return (
        <View>
            <TextInput style={Estilo.txtG}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)} 
            />
       </View>
    )
}

//componente não controlado o textInput padrão (consigo sempre imputar um valor no campo via interface grafica) 
// comportamento quando o componente passa a ser controlado
// ou seja a partir da interface grafica eu nao consigo alterar o valor de Teste do campo input

//para alterar é preciso usar o useState + onChangeText, ficando com o comportamento do Teste + o texto digitado

//OBS OS DADOS NAO SAO ALTERADOS DA INTERFACE E SIM DO COMPONENTE INTERNO PARA A INTERFACE