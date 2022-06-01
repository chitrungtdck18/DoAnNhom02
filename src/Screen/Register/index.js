
import React, { useState, useContext } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { auth, database } from '../../Utils/firebase-Config';
import { styles } from './styles';
import { AuthContext } from '../../Redux/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUser, default_avatar } from '../../Model/User';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { Colors } from '../../Utils/Color';
import { getAuth } from 'firebase/auth';
export default function App(props) {
    const { setToken } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Confirm, setConfirm] = useState('')
    const check = () => {
        var pattern = /^\w+@gmail+?\.[a-zA-Z]{2,3}$/;
        if (name === "" || email === "" || Password === "" || Confirm === "") {
            alert("Vui long nhap thong tin")
        }
        if (Password.length < 5 || Confirm.length < 5) {
            alert('mat khau co it nhat 5 ky tu')
        }
        if (Password != Confirm) {
            alert("pass khong giong nhau")
        }
        if (email.match(pattern)) {
            handleSighnUp()
        }
    }
    const setUserid = async (text) => {
        try {
            const jsonValue = JSON.stringify(text)
            await AsyncStorage.setItem('Userid', jsonValue)
            setToken({ loading: false, userid: text })
        } catch (e) {
            console.log(e)
        }

    }
    const handleSighnUp = () => {
      createUserWithEmailAndPassword(auth,email, Password)
            .then((user) => {
                const u = auth.currentUser;
                updateProfile(u,{
                    displayName: name,
                    photoURL: default_avatar
                }).then(() => {
                    createUser(u)
                    setUserid(u.uid)
                })
            })
            .catch(error => {
                alert(error)
            });

    }
    return (
        <ScrollView style={styles.safeareaview}>
            <View style={styles.viewTop}>
                <Image style={styles.imgLogo} source={require('../../Static/Images/logo-shop.png')}></Image>
                <Text style={styles.textCreate}>Create an Account</Text>
            </View>
            <View style={styles.viewMid}>
                <TextInput
                    style={styles.input}
                    placeholder="Full name..."
                    placeholderTextColor={Colors.primary}
                    value={name}
                    onChangeText={e => setName(e)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email..."
                    placeholderTextColor={Colors.primary}
                    value={email}
                    onChangeText={e => setEmail(e)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password..."
                    placeholderTextColor={Colors.primary}
                    secureTextEntry
                    value={Password}
                    onChangeText={e => setPassword(e)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm..."
                    placeholderTextColor={Colors.primary}
                    secureTextEntry
                    value={Confirm}
                    onChangeText={e => setConfirm(e)}
                />


            </View>
            <View style={styles.viewBot}>
                <TouchableOpacity style={styles.touchLogin} onPress={check}>
                    <Text style={styles.textLogin}> Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.textDA}>I already have an account. Login now</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};



