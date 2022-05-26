
import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import Cancel from '../../Icons/Cancel'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
import { Colors } from "../../Utils/Color";
export default function app(props) {
    const navigation = useNavigation();
    const handleCancel = () => {
        props.cancel(false)
    }
    const handleyes = () => {
        props.ok()
        props.cancel(false)
    }
    return (

        <Modal isVisible={props.ModalVisible} animationIn={"slideInDown"} animationOut={"slideOutUp"} hideModalContentWhileAnimating={false}>
            <View style={styles.modalContainer}>
                <View style={styles.view_header}>
                    <Text style={styles.title}>{props.name}</Text>
                    <TouchableOpacity style={styles.Cancel} onPress={handleCancel}>
                        <Cancel color={"#000"} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.describe}>{props.describe}</Text>
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



