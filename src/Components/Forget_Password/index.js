
import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Cancel from '../../Icons/Cancel'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
import { Colors } from "../../Utils/Color";
export default function app(props) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const handleCancel = () => {
        props.cancel(false)
    }
    const handleyes = () => {
        if (check()) {
            props.ok(email)
            props.cancel(false)
        }
    }
    const check = () => {
        var pattern = /^\w+@gmail+?\.[a-zA-Z]{2,3}$/;
        if (email === "") {
            alert('Please enter Email !!')
            return false
        }
        if (email.match(pattern)) {
           return true
        }
    }
    return (
        <Modal isVisible={props.isModalVisible} animationIn={"slideInDown"} animationOut={"slideOutUp"} hideModalContentWhileAnimating={false}>
            <View style={styles.modalContainer}>
                <View style={styles.view_header}>
                    <Text style={styles.title}>{props.name}</Text>
                    <TouchableOpacity style={styles.Cancel} onPress={handleCancel}>
                        <Cancel color={"#000"} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Email..."
                    placeholderTextColor={Colors.primary}
                    value={email}
                    onChangeText={e => setEmail(e)}
                />
                <View style={styles.view_Selection}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#C4C4C4" }]} onPress={handleCancel}>
                        <Text style={styles.text_button}>no</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#FF301B", marginLeft: 10 }]} onPress={handleyes}>
                        <Text style={styles.text_button}>yes</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>

    );
};



