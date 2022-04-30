
import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { auth } from '../../Utils/firebase-Config';
import { styles } from './styles';
import { getAuth } from 'firebase/auth';

import { AuthContext } from '../../Redux/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login(props) {
  const { setToken } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const check = () => {
    var pattern = /^\w+@gmail+?\.[a-zA-Z]{2,3}$/;
    if (email === "" || Password === "") {
      alert('vui long nhap du')
    }
    if (email.match(pattern)) {
      handleSighin()
    }
  }
  const handleSighin = () => {
    auth
      .signInWithEmailAndPassword(getAuth(), email, Password)
      .then((user) => {
        setUserid(user.user.uid)
      })
      .catch(error => {
        console.log("error: " + error)
      });
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
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.viewTop}>
        <Image style={styles.imgLogo} source={require('../../Static/Images/logoshop.png')}></Image>
      </View>
      <View style={styles.viewMid}>
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
        <TouchableOpacity>
          <Text style={styles.textReset}>Forgot Password? Reset here !</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBot}>
        <TouchableOpacity style={styles.touchLogin} onPress={() => check()} >
          <Text style={styles.textLogin}> Login now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Text style={styles.textDA}>Do not have account? Register now!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


