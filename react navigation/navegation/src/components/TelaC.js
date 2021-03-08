import React from 'react'
import TextoCentral from './TextoCentral'

export default props => {
    console.warn(props.route.params || 'n tem parametro d rota')
    const numero = props.route
        && props.route.params
        && props.route.params.numero ? props.route.params.numero : 0
    return(
        <TextoCentral corFundo='#9932C' corTexto='#000'>
            Tela C = {numero}
        </TextoCentral>
    )    
}
