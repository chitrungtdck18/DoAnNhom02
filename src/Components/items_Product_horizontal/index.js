import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import AddIcon from '../../Icons/AddIcon'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { AuthContext } from '../../Redux/AuthContext';
import { createCart } from '../../Model/ShoppingCart';
export default function App({ item, isupdate, handlerLongClick }) {
    const navigation = useNavigation();
    const { token } = useContext(AuthContext)
    const handleNavigate = () => {
        if (isupdate == true) {
            navigation.navigate('UpdateProduct', { item: item })
        }
        else {
            navigation.navigate('InfoProduct', { item: item })
        }

    }
    const handlelong = () => {
        if (isupdate) {
            console.log("no")
        }
        else {
            handlerLongClick(item)
        }

    }
    const handle_Addtocart = () => {
        createCart(item, token.userid)
    }
    return (
        <TouchableOpacity
            onPress={() => handleNavigate()}
            onLongPress={() => handlelong()}>
            <View style={styles.viewitem}>
                <View style={styles.viewimg}>
                    <Image source={{ uri: item.PhotoUrl1 }} style={styles.imglist} />
                </View>
                <View style={styles.textitem}>
                    <Text style={styles.titleitem}>{item.Name}</Text>
                    <View style={styles.view_Price}>
                        <Text style={styles.Priceitem}>Price: {item.Price} $</Text>
                        <TouchableOpacity onPress={()=>handle_Addtocart()}>
                            <AddIcon />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}