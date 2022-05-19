import React, { useState, useEffect, useContext } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    Button,
} from 'react-native';

import MenuIcon from '../../Icons/MenuIcon'
import CartIcon from '../../Icons/CartIcon'
import SearchIcon from '../../Icons/SearchIcon'
import ShowIcon from '../../Icons/ShowmoreIcon'
import Cancel from '../../Icons/Cancel'
import Modal from 'react-native-modal'
import FCM from 'react-native-fcm';
import { styles } from './styles';
import { getlistCategory, arrayCategory } from '../../Model/Category';
import { AuthContext } from '../../Redux/AuthContext';
import { getUser, arrayUser } from '../../Model/User';
import { database } from '../../Utils/firebase-Config';

export default function Register(props) {
    { arrayCategory }
    const { token } = useContext(AuthContext)
    const [isModalVisible, setisModalVisible] = useState(false)
    const [User, setUser] = useState([])
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('InfoProduct')}>
                <View style={styles.viewitem}>
                    <View style={styles.viewtopitems}>
                        <View style={styles.viewimg}>
                            <Image source={require('../../Static/Images/logonew.png')} style={styles.imglist}>
                            </Image>
                        </View>
                        <View style={styles.viewPrice}>
                            <Text style={styles.priceitem}> Price:</Text>
                            <Text style={styles.priceText}> {item.price}$</Text>
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
    const handleModal = () => {
        setisModalVisible(!isModalVisible)
    }
    const _getData = () => {
        database
            .ref('user/' + token.userid)
            .once('value')
            .then((snapshot) => {
                var item = snapshot.val();
                var returnArr = [];
                returnArr = item;
                setUser(returnArr)
            });
    };
    useEffect(() => {
        getlistCategory()
        _getData()
    }, [_getData()])
    return (
        <SafeAreaView syle={styles.safeareaview}>
            <View style={styles.header}>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu} onPress={() => handleModal()}>
                        <MenuIcon />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', width: '64%' }}>
                    <Text style={styles.nameapp}>Fashionshop</Text>
                </View>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu} onPress={() => props.navigation.navigate('Cart')}>
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
                <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Balo" })}>
                    <Image style={styles.Image} source={require('../../Static/Images/bp.png')}></Image>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Cap" })}>
                    <Image style={styles.Image} source={require('../../Static/Images/cap.png')}></Image>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Jacket" })}>
                    <Image style={styles.Image} source={require('../../Static/Images/jacket.png')}></Image>

                </TouchableOpacity>
            </View>
            <View style={styles.viewType}>
                <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Pant" })}>
                    <Image style={styles.Image} source={require('../../Static/Images/pant.png')}></Image>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Shoe" })}>
                    <Image style={styles.Image} source={require('../../Static/Images/shoes.png')}></Image>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Tshirt" })}>
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
                            { title: '1. How to setting enviroment', price: '20' },
                            { title: '2. How to setting enviroment', price: '10' },
                            { title: '3. How to setting enviroment', price: '50' },
                            { title: '4. How to setting enviroment', price: '40' },
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

            <Modal isVisible={isModalVisible} animationIn={"slideInLeft"} animationOut={"slideOutRight"} hideModalContentWhileAnimating={false}>
                <View style={styles.modalContainer}>
                    <View style={styles.userInfoSection}>
                        <Image source={{ uri: User.urlAvatar }} style={styles.Image_avt} />
                        <View style={styles.info}>
                            <Text>{User.userName}</Text>
                            <Text>{User.email}</Text>
                        </View>
                        <TouchableOpacity onPress={handleModal} style={styles.Cancel}>
                            <Cancel />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item_Drawer}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Management') & handleModal()}>
                            <Text>Management</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>

        </SafeAreaView>
    );
};



