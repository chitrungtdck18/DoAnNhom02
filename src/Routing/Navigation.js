import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { View, ActivityIndicator, Image } from 'react-native';
import Login from '../Screen/Login'
import Register from '../Screen/Register'
import MenuApp from '../Screen/MenuApp'
import InfoProduct from '../Screen/InfoProduct'
import List_ItemByCategory from '../Screen/List_ItemByCategory'
import Management from '../Screen/Management'
import Cart from '../Screen/shoppingcart'
import Profile from '../Screen/Profile'

import { LogBox } from 'react-native';
import { AuthContext } from '../Redux/AuthContext';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {

    const Stack = createNativeStackNavigator();
    const { token } = useContext(AuthContext)
    const { setToken } = useContext(AuthContext)
    const [isLoading, setisLoading] = useState(true)
    const [theme, setheme] = useState(false)
    const getUserid = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Userid');
            if (jsonValue) {
                const data = JSON.parse(jsonValue);
                setToken({ loading: false, userid: data })
            }
            setisLoading(false)
        } catch (e) {
            console.log(e)
            setisLoading(false)
        }
    };
    const changethem = () => {
        console.log("dc goi")
        if (theme) {
            setheme(false)
          
        }
        else {
            setheme(true)
          
        }
    }
    useEffect(() => {
        getUserid()
    }, []);
    if (isLoading) {
        return (
            <View style={styles.loading}>
                {LogBox.ignoreAllLogs()}
                <Image style={styles.Image} source={require('../Static/Images/logo-shop.png')}></Image>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer theme={theme ? DarkTheme : DefaultTheme}>

            {LogBox.ignoreAllLogs()}
            <Stack.Navigator>
                {token.userid === '' ?
                    <>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    </>
                    :
                    <>

                        <Stack.Screen name="MenuApp" component={MenuApp} options={{ headerShown: false }} changethem={() => changethem()} theme={theme} />
                        <Stack.Screen name="InfoProduct" component={InfoProduct} options={{ headerShown: false }} />
                        <Stack.Screen name="List_ItemByCategory" component={List_ItemByCategory} options={{ headerShown: false }} />
                        <Stack.Screen name="Management" component={Management} options={{ headerShown: false }} />
                        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};




