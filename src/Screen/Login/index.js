
import React, { useState } from 'react';
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
export default function Login(props) {
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
      .then(() => {
        console.log('signed in!');
        props.navigation.navigate('MenuApp')
      })
      .catch(error => {
        console.log("error: " + error)

      });
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


