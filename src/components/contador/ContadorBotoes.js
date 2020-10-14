import React, { Fragment } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

export default props => {

    return (
       <View style={style.Botoes}>
           <Button title="+" onPress={props.inc} />
           <Button title="-" onPress={props.dec}/>
       </View>
    )}

const style = StyleSheet.create({ // Deixando botoes um do lado do outro
    Botoes: {
        flexDirection: 'row',
    }
})