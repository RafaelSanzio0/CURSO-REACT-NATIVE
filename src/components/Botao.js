import React, {Fragment} from 'react'
import { Button } from 'react-native'
import Estilo from './estilo'

export default props => {
    
    function executar(){
        console.warn("Exec #01!!!")
    }

    return (
        <Fragment>

            <Button title="Executar #01!" //chamando a função, normalmente é adotado essa estrategia para funcoes grandes
            onPress={executar}
            />

            <Button title="Executar #02!" // criando a função diremante no onPress
            onPress={function(){
                console.warn("Exec #02!!!")
            }}
            />

            <Button title="Executar #03!" // criando uma arrow function diremante no onPress
                onPress={() =>  console.warn("Exec #03!!!")}
            />

        </Fragment>
    )
}