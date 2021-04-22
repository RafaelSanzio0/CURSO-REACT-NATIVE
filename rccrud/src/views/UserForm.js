import React, {useState} from 'react'
import { Text } from 'react-native'

export default ({route, nagivation}) => {
    //console.warn(Object.keys(props.route.params)) // clicando direto no + nos tomamos erro pq nao passamos nenhum parametro, já quando clicados da lista do usuario ele pega os params daquele usuario
    const [user, setuser] = useState(route.params ? route.params : {}) //se e true os params traz eles pra min, senao traz nada
    return (
        <Text>{user.id}</Text> 
    )
}

// aqui estamos recebendo os valores dos parametros(id, nickname etc...) atraves do router da pagina userList