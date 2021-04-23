import React, { useContext } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContextInitialize from '../context/UserContext'

export default props => {
    //console.warn(Object.keys(props)) //podemos debugar com o warn, aqui exibimos as props da nossa screen com um alerta

    // const { state } poderia ser assim e usar como state.user ao inves do exemplo da linha 11
    //console.warn(Object.keys(UsersContextUsed.state))
    const UsersContextUsed = useContext(UsersContextInitialize)

    function getUserItem({item}) { // pega um usuario que esta guardado na variavel data
        return ( // # 2
            <ListItem 
                key={item.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}
                >
            <Avatar source={{uri: item.avatarUrl}}></Avatar>
            <ListItem.Content>
                <ListItem.Title>{item.nick}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            <Button //botoes de editar e deletar de cada usuario
                   onPress={() => props.navigation.navigate('UserForm', item, console.warn(item.id))}
                   type="clear"
                   icon={<Icon name="edit" size={25} color="orange"/>}
                />

            <Button
                onPress={() => confirmUserDeletion(item)}
                type="clear"
                icon={<Icon name="delete" size={25} color="red"/>}
            /> 
            </ListItem>
        )
    }

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }
    
    return ( // # 1
        <View>
            <FlatList
                data={UsersContextUsed.state.users} // carrega meus usuarios
                keyExtractor={users => users.id.toString()} // add uma chave pra kd user
                renderItem={getUserItem} //renderiza na tela os usuarios
            />
        </View>
    )
}