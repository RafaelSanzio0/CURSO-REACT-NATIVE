import React, {useState} from 'react'
import { Text, TextInput, StyleSheet, Button, View } from 'react-native'

export default props => {
    //console.warn(Object.keys(props)) // exibindo as props da minha tela
    const [user, setuser] = useState(props.route.params ? props.route.params : {}) //se e true os params traz eles pra min, senao traz nada
    return (
        <View style={myStyle.form}> 
            <Text>Nome</Text>
            <TextInput
                style={myStyle.input}
                onChangeText={nick => setuser({...user, nick})}
                placeholder="Informe o nome"
                value={user.nick}
            />
            <TextInput
                style={myStyle.input}
                onChangeText={email => setuser({...user, email})}
                placeholder="Informe o email"
                value={user.email}
            />
            <TextInput
                style={myStyle.input}
                onChangeText={avatarUrl => setuser({...user, avatarUrl})}
                placeholder="Informe o avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() =>{props.navigation.goBack()}}
            />
        </View>
    )
}

const myStyle = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 20
    },
    form: {
        padding: 20
    }
})