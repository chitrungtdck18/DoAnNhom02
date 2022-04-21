
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
export default function Login({navigation}) {

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
        />
        <TextInput
          style={styles.input}
          placeholder="Password..."
          placeholderTextColor={'#BD8522'}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.textReset}>Forgot Password? Reset here !</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.viewBot}>
        <TouchableOpacity style={styles.touchLogin} onPress={()=> navigation.navigate('MenuApp')} >
          <Text style={styles.textLogin}> Login now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
          <Text style={styles.textDA}>Do not have account? Register now!</Text>
        </TouchableOpacity>

      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textDA: {
    alignSelf: 'flex-end',
    fontSize: 16,
    borderBottomWidth: 1 / 2,
    borderColor: '#44bcd8',
    fontStyle: 'italic',
    color: '#154c79',
    fontWeight: '500',
    margin: 10,

  },
  textLogin: {
    fontWeight: '700',
    fontSize: 18,
    padding: 15,
    color: '#FFFFFF',
  },
  touchLogin: {
    backgroundColor: '#BD8522',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  textReset: {
    marginRight: 20,
    alignSelf: 'flex-end',
    fontSize: 16,
    borderBottomWidth: 1 / 2,
    borderColor: '#44bcd8',
    fontStyle: 'italic',
    color: '#154c79',
    fontWeight: '500',
  },
  input: {
    fontSize: 16,
    borderWidth: 2,
    margin: 7,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    color: '#BD8522',
    borderColor: '#BD8522',
    fontWeight: 'bold',
  },
  safeareaview: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imgLogo: {
    width: 280,
    height: 180,
    marginTop: 20,
  },
  viewTop: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewMid: {
    marginTop: 10,
    flex: 1,
  },
  viewBot: {
    marginBottom: 10,
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
});

