
import React, { useState, useContext } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { auth, data } from '../../Utils/firebase-Config';
import { getDatabase } from 'firebase/database';
import { styles } from './styles';
import { AuthContext } from '../../Redux/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUser } from '../../Utils/firebase';
import firebase from '../../Utils/firebase-Config';
export default function Register(props) {
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
        auth
            .createUserWithEmailAndPassword(email, Password)
            .then((user) => {
                const u = firebase.auth().currentUser;
                u.updateProfile({
                    displayName: name
                }).then(() => {
                    createUser(user.user)
                    setUserid(user.user.uid)
                })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                console.log("error: " + error)
            });

    }
    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.viewTop}>
                <Text style={styles.textCreate}>Create an Account</Text>
            </View>
            <View style={styles.viewMid}>
                <TextInput
                    style={styles.input}
                    placeholder="Full name..."
                    placeholderTextColor={'#BD8522'}
                    value={name}
                    onChangeText={e => setName(e)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Account..."
                    placeholderTextColor={'#BD8522'}
                    value={email}
                    onChangeText={e => setEmail(e)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password..."
                    placeholderTextColor={'#BD8522'}
                    secureTextEntry
                    value={Password}
                    onChangeText={e => setPassword(e)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm..."
                    placeholderTextColor={'#BD8522'}
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
        </SafeAreaView>
    );
};



