import React, { useContext } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Cancel from '../../Icons/Cancel'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
import { Colors } from "../../Utils/Color";
import { AuthContext } from '../../Redux/AuthContext';
import { createCart } from '../../Model/ShoppingCart';
import { SliderBox } from "react-native-image-slider-box"
export default function app(props) {
    const navigation = useNavigation();
    const item = props.item || []
    const { token } = useContext(AuthContext)
    const handleCancel = () => {
        props.cancel(false)
    }
    const handle_Addtocart = () => {
        createCart(item, token.userid)
        props.cancel(false)
    }
    const images = [
        item.PhotoUrl1,
        item.PhotoUrl2,
        item.PhotoUrl3
    ];
    return (

        <Modal isVisible={props.isModalVisible} animationIn={"slideInDown"} animationOut={"slideOutUp"} hideModalContentWhileAnimating={false}>
            <View style={styles.modalContainer}>
                <View style={styles.view_header}>
                    <Text style={styles.title}>{item.Name}</Text>
                    <TouchableOpacity style={styles.Cancel} onPress={handleCancel}>
                        <Cancel color={"#000"} />
                    </TouchableOpacity>
                </View>
                <SliderBox
                    style={styles.Image}
                    images={images}
                    sliderBoxHeight={500}
                    onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                    dotColor="#2A2D3F"
                    inactiveDotColor="#90A4AE"
                    dotStyle={styles.dot}
                    autoplay={true}
                />
                <ScrollView>
                    <View style={styles.viewDesc}>
                        <Text style={styles.DeContent}>{item.Desc}</Text>
                    </View>
                    <View style={styles.view_Price}>
                        <Text style={styles.Price}>Price</Text>
                        <Text>{item.Price}$</Text>
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.addtocart} onPress={() => handle_Addtocart()}>
                    <Text style={styles.textaddtocart}>add to cart</Text>
                </TouchableOpacity>
            </View>
        </Modal>

    );
};