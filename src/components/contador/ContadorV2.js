import React, { Fragment, useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo.js'
import ContadorBotoes from './ContadorBotoes.js' // comunicação direta feita de PAI pra FILHO
import ContadorDisplay from './ContadorDisplay' // comunicação direta feita de PAI pra FILHO

// nota-se que esta tendo uma comunicação indireta do componente filho ContadorDisplay com o outro componente filho o ContadorBotoes
/* DADO QUE EU POSSUA UM COMPONENTE PAI RESPONSAVEL PELO VALOR DO INC E DEC
   QUANDO EU CLICO NO COMPONENTE FILHO BOTAO ONDE É PASSADO A FUNCAO COM O VALOR DO PAI DE INC E DEC
   ENTAO O VALOR É MOSTRADO POR OUTRO COMPONENTE FILHO O DISPLAY  */

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
       <Fragment>
            <Text style={Estilo.txtG}>
                Contador
            </Text>
            <ContadorDisplay  num={num} />
            <ContadorBotoes inc={inc} dec={dec}/>
       </Fragment>
    )
}