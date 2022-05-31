import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
export default function App({ item, isupdate, handlerLongClick }) {
    const navigation = useNavigation();
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
                </View>

            </View>
        </TouchableOpacity>
    );
}