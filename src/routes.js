import React from  'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Counter from './pages/Counter'
import Detail from './pages/Detail'


export default function Routes(){
    return(
<NavigationContainer>
    
    <AppStack.Navigator screenOptions={{
        headerShown: true,
        headerTintColor: "#fff",
        headerStyle: {
        backgroundColor: "#3d9be9"
        }
    }}>
        <AppStack.Screen name ='Contador 🚀' component={Counter} />
        <AppStack.Screen options={{
            title: "Detalhe",
            headerBackTitleVisible: false,

        }} 
        name='Detail' component={Detail} />
        </AppStack.Navigator>

</NavigationContainer>

    );
}