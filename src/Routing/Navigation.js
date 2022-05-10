import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Screen/Login'
import Register from '../Screen/Register'
import MenuApp from '../Screen/MenuApp'
import InfoProduct from '../Screen/InfoProduct'
import ListShoe from '../Screen/ListShoe'
import Management from '../Screen/Management'
import Cart from'../Screen/shoppingcart'
import { LogBox } from 'react-native';
import { AuthContext } from '../Redux/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
    const Stack = createNativeStackNavigator();
    const { token } = useContext(AuthContext)
    const { setToken } = useContext(AuthContext)
    const getUserid = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Userid');
            if (jsonValue) {
                const data = JSON.parse(jsonValue);
                setToken({ loading: false, userid: data })
            }
        } catch (e) {
            console.log(e)
        }
    };
    useEffect(() => {
        getUserid()
    }, []);
    return (
        <NavigationContainer>
            {LogBox.ignoreAllLogs()}
            <Stack.Navigator>
                {token.userid === '' ?
                    <>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    </>
                    :
                    <>
                        <Stack.Screen name="MenuApp" component={MenuApp} options={{ headerShown: false }} />
                        <Stack.Screen name="InfoProduct" component={InfoProduct} options={{ headerShown: false }} />
                        <Stack.Screen name="ListShoe" component={ListShoe} options={{ headerShown: false }} />
                        <Stack.Screen name="Management" component={Management} options={{ headerShown: false }} />
                        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};




