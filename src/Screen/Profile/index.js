
import React, { useState } from 'react';
import {
    SafeAreaView,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Username from '../../Icons/Username';
import Phone from '../../Icons/PhoneIcon';
import Notification from '../../Components/Notification';
import Header from '../../Components/header_info';
import firebase from '../../Utils/firebase-Config';
// import ImagePicker from 'react-native-image-crop-picker';
import { styles } from './styles';
import { updateUser } from '../../Model/User';
export default function App(props) {
    const User = props.route.params.user
    const u = firebase.auth().currentUser;
    const [name, setName] = useState(User.userName || "")
    const [phone, setphone] = useState(User.phone || "")
    const [urlAvatar, seturlAvatar] = useState(User.urlAvatar || "")
    const [choose, setchoose] = useState(false)
    const handleSave = () => {
        u.updateProfile({
            displayName: name,
            photoURL: urlAvatar
        }).then(() => {
            updateUser(u, phone)
        })
    }
    const handlePress = () => {
        if (check()) {
            setchoose(!choose)
        }
    }
    const check = () => {
        if (name == "" || urlAvatar == "" || phone.length < 9 || phone.length > 11) {
            return false
        }
        else {
            return true
        }
    }
    const choosePhotoFromLibrary = () => {
        // ImagePicker.openPicker({
        //     width: 300,
        //     height: 300,
        //     cropping: true,
        //     compressImageQuality: 0.7
        // }).then(image => {
        //     setPhoto(image.path)
        //     setImageFile({
        //         uri: image.path,
        //         type: image.mime,
        //         name: image.modificationDate
        //     })
        //     setModalVisible(!modalVisible)
        // });
    }
    return (
        <View style={styles.safeareaview}>
            <Header name={"Profile"} />

            <TouchableOpacity onPress={() => choosePhotoFromLibrary()}>
                <Image style={styles.Image_avt} source={{ uri: urlAvatar }} />
            </TouchableOpacity>
            <View style={styles.Textput}>
                <Username />
                <TextInput
                    style={styles.input}
                    placeholder="Full name..."
                    placeholderTextColor={'#BD8522'}
                    value={name}
                    onChangeText={e => setName(e)}
                />
            </View>
            <View style={styles.Textput}>
                <Phone />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number..."
                    placeholderTextColor={'#BD8522'}
                    value={phone}
                    onChangeText={e => setphone(e)}
                />
            </View>
            <TouchableOpacity style={styles.save} onPress={() => handlePress()}>
                <Text style={styles.Save_text}>save</Text>
            </TouchableOpacity>
            <Notification
                isModalVisible={choose}
                cancel={e => setchoose(e)}
                ok={() => handleSave()}
                name={"Update User"}
                describe={"Are you sure to Update the profile!??"}
            />
        </View>
    );
};



