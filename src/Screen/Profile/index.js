
import React, { useState } from 'react';
import {
    SafeAreaView,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity,


} from 'react-native';
import Username from '../../Icons/Username';
import Phone from '../../Icons/PhoneIcon';
import Notification from '../../Components/Notification';
import Header from '../../Components/header_info';
import firebase, { storage } from '../../Utils/firebase-Config';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal'
import { styles } from './styles';
import { updateUser } from '../../Model/User';
import { Colors } from '../../Utils/Color';

export default function App(props) {
    const User = props.route.params.user
    const u = firebase.auth().currentUser;
    const [name, setName] = useState(User.userName || "")
    const [phone, setphone] = useState(User.phone || "")
    const [urlAvatar, seturlAvatar] = useState(User.urlAvatar || "")
    const [choose, setchoose] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [photo, setPhoto] = useState(urlAvatar);
    const [imageFile, setImageFile] = useState({});
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [bob, setbob] = useState("")

    const handleSave = async () => {
        if (photo != urlAvatar) {
            handleUpimge()
        }
        else {
            u.updateProfile({
                displayName: name,
            }).then(() => {
                updateUser(u, phone)
            })
        }

    }
    const handleUpimge = async () => {
        var str = imageFile;
        var n = str.lastIndexOf('/');
        var filename = str.substring(n + 1);
        const uploadUrl = "User/" + User.userID + "/" + filename
        const task = storage.ref(uploadUrl)
        await task.put(imageFile)
            .then(() => {
                task
                    .getDownloadURL()
                    .then((url) => {
                        console.log(url)
                        // seturlAvatar(url)
                        // u.updateProfile({
                        //     displayName: name,
                        //     photoURL: url
                        // }).then(() => {
                        //     updateUser(u, phone)
                        // })
                    })

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
    const choosePhotoFromLibrary = async () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7,
        }).then(image => {
            setPhoto(image.path)
            setImageFile(image.path)
            setModalVisible(false)
        });
    }


    const takePhotoFromCamra = async () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7,
            multiple: true,
            includeBase64: true,
        }).then(image => {
            setImageFile(image.uri)
            setModalVisible(false)
        });

    }
    return (
        <View style={styles.safeareaview}>
            <Header name={"Profile"} />

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image style={styles.Image_avt} source={{ uri: photo }} />
            </TouchableOpacity>
            <View style={styles.Textput}>
                <Username />
                <TextInput
                    style={styles.input}
                    placeholder="Full name..."
                    placeholderTextColor={Colors.primary}
                    value={name}
                    onChangeText={e => setName(e)}
                />
            </View>
            <View style={styles.Textput}>
                <Phone />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number..."
                    placeholderTextColor={Colors.primary}
                    value={phone}
                    onChangeText={e => setphone(e)}
                />
            </View>
            <TouchableOpacity style={styles.save} onPress={() => handlePress()}>
                <Text style={styles.Save_text}>save</Text>
            </TouchableOpacity>
            <Notification
                ModalVisible={choose}
                cancel={e => setchoose(e)}
                ok={() => handleSave()}
                name={"Update User"}
                describe={"Are you sure to Update the profile!??"}
            />
            <Modal isVisible={modalVisible} animationIn={"slideInDown"} animationOut={"slideOutUp"} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.Chosse_acction}>Chosse acction</Text>
                        <View style={styles.view_button}>
                            <TouchableOpacity style={styles.touchModal} onPress={() => takePhotoFromCamra()}>
                                <Text style={styles.textTouch}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchModal} onPress={() => choosePhotoFromLibrary()}>
                                <Text style={styles.textTouch}>Graly</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchModal} onPress={() => setModalVisible(false)}>
                                <Text style={styles.textTouch}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
};



