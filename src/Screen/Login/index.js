
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
import { getAuth, signInWithEmailAndPassword ,sendPasswordResetEmail} from "firebase/auth";
import { styles } from './styles';
import { AuthContext } from '../../Redux/AuthContext';
import Forget_Password from '../../Components/Forget_Password';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../Utils/Color';
export default function App(props) {
  const { setToken } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [choose, setchoose] = useState(false)
  const check = () => {
    var pattern = /^\w+@gmail+?\.[a-zA-Z]{2,3}$/;
    if (email === "" || Password === "") {
      alert('vui long nhap du')
    }
    if (!email.match(pattern)) {
      alert("email sai!!")
    }
    else{
      handleSighin()
    }
  }
  const handleSighin = () => {
    signInWithEmailAndPassword(auth, email, Password)
      .then((user) => {
        setUserid(user.user.uid)
      })
      .catch(error => {
        alert("error: " + error)
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
  const handleRestPass = (Email) => {
   sendPasswordResetEmail(auth,Email)
      .then(function (user) {
        alert('Please check your email...')
      }).catch(function (e) {
        console.log(e)
      })
  }
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.viewTop}>
        <Image style={styles.imgLogo} source={require('../../Static/Images/logo-shop.png')}></Image>
      </View>
      <View style={styles.viewMid}>
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
        <TouchableOpacity onPress={() => setchoose(!choose)}>
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
      <Forget_Password
        isModalVisible={choose}
        cancel={e => setchoose(e)}
        ok={e => handleRestPass(e)}
        name={"Forget Password"}

      />
    </SafeAreaView>
  );
};


