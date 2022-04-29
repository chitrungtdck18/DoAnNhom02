
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { auth } from '../../Utils/firebase-Config';
import { getAuth } from 'firebase/auth';
import { styles } from './styles';
export default function Register(props) {
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
    const handleSighnUp = () => {
        auth
            .createUserWithEmailAndPassword(getAuth(), email, Password)
            .then(() => {
                console.log('User account created & signed in!');
                props.navigation.navigate('MenuApp')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
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



