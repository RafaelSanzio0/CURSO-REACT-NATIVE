import React, { Fragment } from 'react'

// CONHECENDO O PROPS.CHILDREN
// pois numa situação hipotetica se vc importar o membro direto no app e tentar passar valores diferentes
// do que esta setado aqui, n vai funcionar, vc sempre terá os membros como ana e julia

// antes eu tinha as instancias de membro aqui, substitui tudo pelo props.children

export default props => {

    return (
       <Fragment>
           {props.children}
       </Fragment>
    )
}