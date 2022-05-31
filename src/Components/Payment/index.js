
import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList
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
    const renderItem = ({ item }) => {
        return (
            <View style={styles.viewitem}>
                <View style={styles.viewimg}>
                    <Image source={{ uri: item.PhotoUrl1 }} style={styles.imglist} />
                </View>
                <View style={styles.content_item}>
                    <View style={styles.view_name}>
                        <Text style={styles.name}>{item.Name}</Text>
                        <Text style={styles.Price}>Price: {item.Price}$</Text>
                        <Text>Money: {item.Price * item.Quantity} $</Text>
                    </View>

                </View>
            </View>
        )
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
                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
                <TouchableOpacity style={styles.payment} onPress={()=>handleCancel()}>
                    <Text style={styles.textpayment}>confirm</Text>
                </TouchableOpacity>
            </View>
        </Modal>

    );
};



