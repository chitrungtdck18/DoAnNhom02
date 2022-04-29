
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

import MenuIcon from '../../Icons/MenuIcon'
import CartIcon from '../../Icons/CartIcon'
import SearchIcon from '../../Icons/SearchIcon'
import ShowIcon from '../../Icons/ShowmoreIcon'
import { styles } from './styles';

export default function Register(props) {

    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.header}>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu} onPress={() => props.navigation.goBack()}>
                        <MenuIcon />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', width: '64%' }}>
                    <Text style={styles.nameapp}>Info Product</Text>
                </View>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu}>
                        <CartIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewimg}>
                <Image source={require('../../Static/Images/cap.png')} style={styles.imgproduct}>
                </Image>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.nameProduct}>PKTT Nón Y Nguyên Bản 18- Ver2</Text>
                <Text style={styles.priceProduct}>35 $</Text>
            </View>
            <View style={styles.viewDesc}>
                <Text style={styles.Desc}>
                    Description
                </Text>
                <Text style={styles.DeContent}>
                    PKTT Nón Y Nguyên Bản 18- Ver2
                    Chất liệu: Simily
                    Thành phần: 100% Simily
                </Text>
            </View>
        </SafeAreaView>
    );
};



