import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import TelaA from './components/TelaA'
import TelaB from './components/TelaB'
import TelaC from './components/TelaC'

export default props => (
    <SafeAreaView style={{flex: 1}}> 
        <TelaA></TelaA>
        <TelaB></TelaB>
        <TelaC></TelaC>
    </SafeAreaView>
)
