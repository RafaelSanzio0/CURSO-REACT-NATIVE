import React from 'react'
import { Button, Text, View } from 'react-native'

export default props => (
    <View style={{flex: 1}}>
        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            {props.voltar ? <Button title='Voltar' onPress={function() {{props.navigation.goBack()}}}/> : false}
            {props.avancar ? <Button title='Avancar' onPress={() => {props.navigation.push(props.avancar, {numero: parseInt(Math.random()*101)})}}/> : false}
        </View>
        
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)

// {props.avancar ? <Button title='Avancar' onPress={() => {props.navigation.navigation(props.avancar)}}/> : false}
