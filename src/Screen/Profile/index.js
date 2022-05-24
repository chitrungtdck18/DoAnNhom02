
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

    const handleSave = async () => {
        const uploadUrl = "User/" + User.userID + "/" + imageFile.name+".png"
        await storage.ref(uploadUrl).put(imageFile.path)
            .then(() => {
                storage.ref(uploadUrl).getDownloadURL().then((url) => {
                    console.log(url)
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
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7,
            mediaType:"photo"
        }).then(image => {
            setPhoto(image.path)
            setImageFile({
                uri: image.path,
                type: image.mime,
                name: image.modificationDate
            })
            setModalVisible(false)

        });
    }


    const takePhotoFromCamra = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7,
            multiple: true,
            includeBase64: true,
            mediaType:"photo"
        }).then(image => {
            setPhoto(image.path)
            setImageFile({
                uri: image.path,
                type: image.mime,
                name: image.modificationDate
            })
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
                ModalVisible={choose}
                cancel={e => setchoose(e)}
                ok={() => handleSave()}
                name={"Update User"}
                describe={"Are you sure to Update the profile!??"}
            />
            <Modal isVisible={modalVisible} animationIn={"slideInDown"} animationOut={"slideOutUp"} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ color: '#FF8600', fontSize: 16 }}>Chosse acction</Text>
                        <View style={{ padding: 10, marginVertical: 10 }}>
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



