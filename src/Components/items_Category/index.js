import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
export default function App({ item }) {
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('List_ItemByCategory', { name: item.title })
    }
    return (
        <TouchableOpacity
            onPress={() => handleNavigate()}>
            <View style={styles.viewitem}>
                <Text style={styles.titleitem}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}