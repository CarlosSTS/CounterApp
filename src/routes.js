import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Counter from './pages/Counter'
import Detail from './pages/Detail'

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{
                headerShown: true,
                headerTintColor: "#fff",
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "#3d9be9"
                }
            }}>
                <AppStack.Screen name='Contador 🚀' component={Counter} />
                <AppStack.Screen name='Detail' component={Detail}
                    options={({ route }) => ({ title: `Total: ${route.params.counter}` })}
                />
            </AppStack.Navigator>

        </NavigationContainer>

    );
}