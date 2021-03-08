import React from 'react'
import { createDrawerNavigator }from '@react-navigation/drawer'
import TelaA from '../components/TelaA'
import TelaB from '../components/TelaB'
import TelaC from '../components/TelaC'

const Drawer = createDrawerNavigator ()

export default props => (
    <Drawer.Navigator initialRouteName="TelaB">
        <Drawer.Screen name="TelaA" component={TelaA}></Drawer.Screen>
        <Drawer.Screen name="TelaB" component={TelaB}></Drawer.Screen>
        <Drawer.Screen name="TelaC" component={TelaC}></Drawer.Screen>
    </Drawer.Navigator>
)