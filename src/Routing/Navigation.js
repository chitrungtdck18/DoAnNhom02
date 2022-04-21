import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Screen/Login'
import Register from '../Screen/Register'
import MenuApp from '../Screen/MenuApp'
import InfoProduct from '../Screen/InfoProduct'
import ListShoe from '../Screen/ListShoe'
import Management from '../Screen/Management'



export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="MenuApp" component={MenuApp} options={{ headerShown: false }} />
                <Stack.Screen name="InfoProduct" component={InfoProduct} options={{ headerShown: false }} />
                <Stack.Screen name="ListShoe" component={ListShoe} options={{ headerShown: false }} />
                <Stack.Screen name="Management" component={Management} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};




