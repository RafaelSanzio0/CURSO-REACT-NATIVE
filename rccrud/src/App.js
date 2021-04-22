import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from 'react-native-elements/'

const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation }) => { // destructing do navigation para uso do mesmo
                        return  {
                            title: "Lista de Usuarios",
                            headerRight: () => ( // essa func retorna um elementor react element a direita do header no caso o icone de +
                                <Button
                                    onPress={() => navigation.navigate('UserForm')}
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white" />}     
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{title: 'Formulario de usuarios'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
        fontWeight: 'bold'
    },
    headerTintColor: 'white'
}