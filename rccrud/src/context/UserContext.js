import React, { createContext } from 'react'
import users from '../data/userMock'

const UsersContextInitialize = createContext({}) // criando um contexto passando um obj vazio para inicializa-lo

export const UserProvider = props => { // resumo --> exportando um componente que prove a minha lista de usuarios pra toda a nossa app
    return (
        <UsersContextInitialize.Provider value={{ //aqui estou passando a lista de usuarios dentro do provider no states: user
            state: {
                users
            }
        }}>
            {props.children} 
        </UsersContextInitialize.Provider>
    )
} // no props.children tudo que é passado no provider(instanciamos ele no app.js) vai ser redenrizado nesse carinha ;)

export default UsersContextInitialize // exportando o userContext pra usar em outros lugares

/*
utilizamos o context API pra quando temos uma qtd grande de componentes por ex
{app > navegaccao > telas > lista > botoes etc...}
e precisamos compartilhar dados entre esses componentes 
*/

/*

Quando usar ContextAPI e redux?

Se você deseja apenas compartilhar estados entre diferentes componentes, independente da relação deles, o
ContextAPI atende bem pois essa é a finalidade dele. Já o REDUX tem esse comportamento por CONSEQUÊNCIA
de uma série de outros fatores, ou seja, se seu desejo for somente o descrito acima, utilizar o Redux
seria matar uma mosca com um canhão. O Redux começa a entrar em cena quando você precisa de um FLUXO dos acontecimentos,
MAPEANDO cada mudança de estado e O QUE FEZ este ser modificado. Isso começa a te dar poder para várias outras coisas que vão muito além de compartilhar estados.
*/