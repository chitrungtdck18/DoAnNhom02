
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


export default function Register({ navigation }) {

    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.header}>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu} onPress={() => navigation.goBack()}>
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

const styles = StyleSheet.create({
    viewDesc: {
        padding: 20,
        borderBottomWidth: 2,
        borderTopWidth: 2,
    },
    Desc: {
        fontSize: 24,
        fontWeight: "500",
    },
    DeContent: {
        marginVertical: 3,
        fontSize: 16,
        fontWeight: '500',
    },
    viewText: {
        margin: 20,
    },
    priceProduct: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        width: '40%',
        paddingVertical: 3,
        marginVertical: 5,
        borderRadius: 15,
        backgroundColor: '#BD8522',
    },
    nameProduct: {
        fontSize: 24,
        fontWeight: "500",
    },
    imgproduct: {
        borderWidth: 2,
        borderColor: "red",
        marginVertical: 20,
        borderRadius: 10,
    },
    viewimg: {
        alignItems: "center",
        borderWidth: 1,
        paddingBottom: 30,
    },
    touchIconMenu: {
        padding: 20,
    },
    header: {
        backgroundColor: '#BD8522',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nameapp: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: 20,
    },
    safeareaview: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

