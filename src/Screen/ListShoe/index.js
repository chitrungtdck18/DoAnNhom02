
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
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('InfoProduct')}>
                <View style={styles.viewitem}>
                    <View style={styles.viewimg}>
                        <Image source={require('../../Static/Images/logonew.png')} style={styles.imglist}>
                        </Image>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
        },
    ];
    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.header}>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu} onPress={() => navigation.goBack()}>
                        <MenuIcon />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', width: '64%' }}>
                    <Text style={styles.nameapp}>Shoes</Text>
                </View>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu}>
                        <CartIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 1, marginVertical: 15}}>
                <FlatList
                    data={[
                        { title: '1. How to setting enviroment', price: '20$' },
                        { title: '2. How to setting enviroment', price: '10$' },
                        { title: '3. How to setting enviroment', price: '50$' },
                        { title: '4. How to setting enviroment', price: '40$' },
                        { title: '5. How to setting enviroment', price: '0$' },
                        { title: '6. How to setting enviroment', price: '4$' },
                        { title: '7. How to setting enviroment', price: '45$' },
                        { title: '8. How to setting enviroment', price: '0$' },
                        { title: '9. How to setting enviroment', price: '48$' },
                        { title: '10. How to setting enviroment', price: '90$' },
                    
                    ]}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    imglist: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    viewimg: {
        width: 100,
        height: 80,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    viewitem: {
        marginHorizontal: 20,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#BD8522',
        height: 170,
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

