/*
Estamos aprendendo a utilizar um tipo de navegacao, no caso o stack
stack.navigation indica que o tipo de navegacao utilizada vai ser o stack e
stack.screen dita as telas
*/
import React from 'react'
import { createStackNavigator }from '@react-navigation/stack'
import TelaA from '../components/TelaA'
import TelaB from '../components/TelaB'
import TelaC from '../components/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator ()

export default props => (
    
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>

      <Stack.Screen name="TelaA" options={{title: 'Informacoes Iniciais'}}>
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA/>
                </PassoStack>
            )}
      </Stack.Screen>

      <Stack.Screen name="TelaB">
            {props => (
                    <PassoStack {...props} voltar avancar="TelaC">
                        <TelaB/>
                    </PassoStack>
                )}
      </Stack.Screen>

      <Stack.Screen name="TelaC">
            {props => (
                    <PassoStack {...props} voltar avancar="TelaC">
                        <TelaC  {...props}/>
                    </PassoStack>
                )}
      </Stack.Screen>      
    </Stack.Navigator>
)