
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground
} from 'react-native';

import GoBack from '../../Icons/GoBack'
import CartIcon from '../../Icons/CartIcon'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Colors } from "../../Utils/Color";
export default function Register(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
        <View style={{ width: '18%' }}>
            <TouchableOpacity style={styles.touchIconMenu} onPress={() => navigation.goBack()}>
                <GoBack />
            </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', width: '64%' }}>
            <Text style={styles.nameapp}>{props.name}</Text>
        </View>
        <View style={{ width: '18%' }}>
            <TouchableOpacity style={styles.touchIconMenu} onPress={() => navigation.navigate('Cart')}>
                <CartIcon />
            </TouchableOpacity>
        </View>
    </View>
 
    );
};



