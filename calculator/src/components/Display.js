import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
       flex: 1,
       padding: 20,
       justifyContent: 'center', //cresce de acordo com a necessidade
       backgroundColor: 'rgba(0,0,0,0.6)',
       alignItems: 'flex-end' //os itens vao sempre ficar alinhado a direita
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
})

export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
    </View>