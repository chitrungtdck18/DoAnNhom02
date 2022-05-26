
import React, { useState, useContext } from 'react';
import {
    SafeAreaView,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity,


} from 'react-native';
import Lock from '../../Icons/LockIcon';
import Header from '../../Components/header_info';
import firebase, { auth } from '../../Utils/firebase-Config';
import { AuthContext } from '../../Redux/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notification from '../../Components/Notification';
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
export default function App(props) {
    const user = firebase.auth().currentUser;
    const { setToken } = useContext(AuthContext)
    const [Current_Password, setCurrent_Password] = useState("")
    const [New_Password, setNew_Password] = useState("")
    const [Confirm_Password, setConfirm_Password] = useState("")
    const [choose, setchoose] = useState(false)
    const check = async () => {
        if (Current_Password.length < 6 || New_Password.length < 6 || Confirm_Password.length < 6) {
            alert("Vui lòng nhập đủ thông tin!!")
        }
        else if (New_Password === Current_Password) {
            alert("Mật khẩu mới trùng với mật hiện tại!!")
        }
        else if (New_Password !== Confirm_Password) {
            alert("Mật khẩu không trùng")
        }
        else {
            setchoose(true)
        }
    }
    const checkauth = async () => {
        const emailCred = firebase.auth
            .EmailAuthProvider.credential(user.email, Current_Password);
        user.reauthenticateWithCredential(emailCred)
            .then(() => {
                user.updatePassword(New_Password);
                handleLogout()
            })
            .catch(error => {
                console.log(error)
            });
    }
    const handleLogout = async () => {
        auth.
            signOut()
            .then(() => setUserid(""));

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
        <View style={styles.safeareaview}>
            <Header name={"Change Password"} />
            <View style={styles.Textput}>
                <View style={styles.Lock}>
                    <Lock />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Current Password"
                    placeholderTextColor={Colors.primary}
                    secureTextEntry
                    value={Current_Password}
                    onChangeText={e => setCurrent_Password(e)}
                />
            </View>

            <View style={styles.Textput}>
                <View style={styles.Lock}>
                    <Lock />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    placeholderTextColor={Colors.primary}
                    secureTextEntry
                    value={New_Password}
                    onChangeText={e => setNew_Password(e)}
                />
            </View>

            <View style={styles.Textput}>
                <View style={styles.Lock}>
                    <Lock />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor={Colors.primary}
                    secureTextEntry
                    value={Confirm_Password}
                    onChangeText={e => setConfirm_Password(e)}
                />
            </View>
            <TouchableOpacity style={styles.save} onPress={() => check()}>
                <Text style={styles.Save_text}>save</Text>
            </TouchableOpacity>
            <Notification
                ModalVisible={choose}
                cancel={e => setchoose(e)}
                ok={() => checkauth()}
                name={"Change Password"}
                describe={"Are you sure to Change  the Password!??"}
            />

        </View>
    );
};



