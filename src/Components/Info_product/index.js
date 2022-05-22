
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
export default function app(props) {
    const navigation = useNavigation();
    const handleCancel = () => {
        props.cancel(false)
    }
    return (

        <Modal isVisible={props.isModalVisible} animationIn={"slideInDown"} animationOut={"slideOutUp"} hideModalContentWhileAnimating={false}>
            <View style={styles.modalContainer}>
                <View style={styles.view_header}>
                    <Text style={styles.title}>name</Text>
                    <TouchableOpacity style={styles.Cancel} onPress={handleCancel}>
                        <Cancel color={"#000"} />
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>

    );
};



