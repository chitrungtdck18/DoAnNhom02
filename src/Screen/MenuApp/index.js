
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
            <TouchableOpacity onPress={()=> navigation.navigate('InfoProduct')}>
                <View style={styles.viewitem}>
                    <View style={styles.viewtopitems}>
                        <View style={styles.viewimg}>
                            <Image source={require('../../Static/Images/logonew.png')} style={styles.imglist}>
                            </Image>
                        </View>
                        <View style={styles.viewPrice}>
                            <Text style={styles.priceitem}> Price:</Text>
                            <Text style={styles.priceText}> {item.price}</Text>
                        </View>
                    </View>
                    <View style={styles.textitem}>
                        <Text style={styles.titleitem}>{item.title}</Text>
                        <Text style={styles.descriptionitem}>{item.description}</Text>
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
                    <TouchableOpacity style={styles.touchIconMenu}  onPress={()=> navigation.navigate('Management')}>
                        <MenuIcon />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', width: '64%' }}>
                    <Text style={styles.nameapp}>Fashionshop</Text>
                </View>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu}>
                        <CartIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewSearch}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor={'#BD8522'}
                />
                <TouchableOpacity>
                    <SearchIcon />
                </TouchableOpacity>

            </View>
            <View style={styles.viewType}>
                <TouchableOpacity style={styles.touchImage}>
                    <Image style={styles.Image} source={require('../../Static/Images/bp.png')}></Image>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchImage}>
                    <Image style={styles.Image} source={require('../../Static/Images/cap.png')}></Image>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchImage}>
                    <Image style={styles.Image} source={require('../../Static/Images/jacket.png')}></Image>

                </TouchableOpacity>
            </View>
            <View style={styles.viewType}>
                <TouchableOpacity style={styles.touchImage}>
                    <Image style={styles.Image} source={require('../../Static/Images/pant.png')}></Image>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchImage} onPress={()=> navigation.navigate('ListShoe')}>
                    <Image style={styles.Image} source={require('../../Static/Images/shoes.png')}></Image>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchImage}>
                    <Image style={styles.Image} source={require('../../Static/Images/tshirt.png')}></Image>

                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15, borderTopLeftRadius: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '85%', marginLeft: 20, color: '#000000', fontWeight: '500', fontSize: 16, margin: 5 }}>New Product</Text>
                    <TouchableOpacity style={styles.touchIconShow}>
                        <ShowIcon />
                    </TouchableOpacity>

                </View>

                <View style={{ paddingBottom: 5 }}>
                    <FlatList
                        data={[
                            { title: '1. How to setting enviroment', price: '20$' },
                            { title: '2. How to setting enviroment', price: '10$' },
                            { title: '3. How to setting enviroment', price: '50$' },
                            { title: '4. How to setting enviroment', price: '40$' },
                        ]}
                        renderItem={renderItem}
                        horizontal
                        showsHorizontalScrollIndicator={false}

                    />
                </View>
            </View>
            <View style={{ marginTop: 15, borderTopLeftRadius: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: '85%', marginLeft: 20, color: '#000000', fontWeight: '500', fontSize: 16, margin: 5 }}>New Product</Text>
                    <TouchableOpacity style={styles.touchIconShow}>
                        <ShowIcon />
                    </TouchableOpacity>

                </View>

                <View style={{ paddingBottom: 5 }}>
                    <FlatList
                        data={[
                            { title: '1. How to setting enviroment', description: '- If you are new to mobile development ', price: '10$' },
                            { title: '2. How to setting enviroment', description: '- If you are new to mobile development ', price: '25$' },
                            { title: '3. How to setting enviroment', description: '- If you are new to mobile development ', price: '15$' },
                            { title: '4. How to setting enviroment', description: '- If you are new to mobile development ', price: '30$' },
                        ]}
                        renderItem={renderItem}
                        horizontal
                        showsHorizontalScrollIndicator={false}

                    />
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    priceText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        color: 'white'

    },
    priceitem: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        borderBottomWidth: 2,
        borderColor: '#FFFFFF',
        fontStyle: 'italic',
        color: '#000000',
    },
    viewPrice: {
        margin: 10,
        justifyContent: 'center',
    },
    viewtopitems: {
        flexDirection: 'row',
    },
    imglist: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    descriptionitem: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '500',

    },
    titleitem: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    textitem: {
        margin: 10,
    },
    viewitem: {
        marginLeft: 20,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#BD8522',
        width: 210,
        height: 170,
        marginRight: -10,
    },
    touchIconShow: {
        alignSelf: 'flex-end'
    },
    viewimg: {

        width: 100,
        height: 80,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },

    viewType2: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    viewType:
    {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    touchImage: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#BD8522',
        borderRadius: 10,
        margin: 7,
    },
    viewSearch: {
        alignItems: 'center',
        borderWidth: 1,
        flexDirection: 'row',

        borderColor: '#BD8522',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        margin: 10,
    },
    input: {
        fontSize: 16,
        paddingHorizontal: 20,
        color: '#BD8522',
        borderColor: '#BD8522',
        fontWeight: '500',
        width: '88%',
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
    textDA: {
        alignSelf: 'flex-end',
        fontSize: 16,
        borderBottomWidth: 1 / 2,
        borderColor: '#44bcd8',
        fontStyle: 'italic',
        color: '#154c79',
        fontWeight: '500',
        margin: 10,

    },
    textLogin: {
        fontWeight: '700',
        fontSize: 18,
        padding: 15,
        color: '#FFFFFF',
    },
    touchLogin: {
        backgroundColor: '#BD8522',
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
    },
    safeareaview: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

