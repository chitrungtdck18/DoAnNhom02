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
} from 'react-native';

import MenuIcon from '../../Icons/MenuIcon'
import CartIcon from '../../Icons/CartIcon'
import SearchIcon from '../../Icons/SearchIcon'
import ShowIcon from '../../Icons/ShowmoreIcon'
import Cancel from '../../Icons/Cancel'
import Management from '../../Icons/Management'
import Exit from '../../Icons/ExitIcon'
import Update from '../../Icons/UpdateIcon'
import Support from '../../Icons/SupportIcon'
import UserIcon from '../../Icons/Username'
import Modal from 'react-native-modal'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Info_product from '../../Components/Info_product'
import { signOut, getAuth } from "firebase/auth";
import { styles } from './styles';
import { getlistCategory, arrayCategory } from '../../Model/Category';
import { AuthContext } from '../../Redux/AuthContext';
import { getDatabase, ref, onValue } from "firebase/database"
import { Colors } from '../../Utils/Color';
export default function App(props) {
    { arrayCategory }
    const { token } = useContext(AuthContext)
    const [isModalVisible, setisModalVisible] = useState(false)
    const [User, setUser] = useState([])
    const [choose, setchoose] = useState(false)
    const { setToken } = useContext(AuthContext)
    const Adminid = "KIX43luQnZRTd8Mc5GtvJPcBkzd2"
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('InfoProduct', { item: item })} onLongPress={handlerLongClick}>
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

    const handleLogout = async () => {
        signOut(getAuth())
            .then(() => setUserid(""));

    }
    const setUserid = async (text) => {
        try {
            const jsonValue = JSON.stringify(text)
            await AsyncStorage.setItem('Userid', jsonValue)
            setToken({ loading: false, userid: text })
        } catch (e) {
            console.log(e)
        }
    }
    const _getData = () => {
        const db = getDatabase();
        const Ref = ref(db, 'user/' + token.userid);
        onValue(Ref, (snapshot) => {
            var item = snapshot.val();
            var returnArr = [];
            returnArr = item;
            setUser(returnArr)
        });

    };
    const handlerLongClick = () => {
        setchoose(!choose)
    }
    useEffect(() => {
        getlistCategory()
        _getData()
        const unsubscribe = props.navigation.addListener('focus', () => {
            setisModalVisible(false)
        });
        return unsubscribe;
    }, [])
    return (
        <SafeAreaView syle={styles.safeareaview}>
            <View style={styles.header}>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu} onPress={() => setisModalVisible(true)}>
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
                    placeholderTextColor={Colors.primary}
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

            <Modal isVisible={isModalVisible} animationIn={"slideInLeft"} animationOut={"slideOutLeft"} hideModalContentWhileAnimating={false}>
                <View style={styles.modalContainer}>
                    <View style={styles.userInfoSection}>
                        <Image source={{ uri: User.urlAvatar }} style={styles.Image_avt} />
                        <View style={styles.info}>
                            <Text style={styles.userName}>{User.userName}</Text>
                            <Text style={styles.userEmail}>{User.email}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setisModalVisible(false)} style={styles.Cancel}>
                            <Cancel />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item_Drawer}>
                        {token.userid === Adminid ? <TouchableOpacity onPress={() => props.navigation.navigate('Management') & setisModalVisible(false)} style={styles.view_item_Drawer}>
                            <Management />
                            <Text style={styles.text_item}>Management</Text>
                        </TouchableOpacity>
                            : null}

                        <TouchableOpacity onPress={() => props.navigation.navigate('Profile', { user: User }) & setisModalVisible(false)} style={styles.view_item_Drawer}>
                            <UserIcon />
                            <Text style={styles.text_item}>Update User</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => props.navigation.navigate('Password_Reset') & setisModalVisible(false)} style={styles.view_item_Drawer}>
                            <Update />
                            <Text style={styles.text_item}>Password reset</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Cart') & setisModalVisible(false)} style={styles.view_item_Drawer}>
                            <CartIcon color={"#000"} />
                            <Text style={styles.text_item}>Shoping Cart</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("Support") & setisModalVisible(false)} style={styles.view_item_Drawer}>
                            <Support />
                            <Text style={styles.text_item}>Support</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => handleLogout() & setisModalVisible(false)} style={styles.Exit}>
                            <Exit />
                            <Text style={styles.text_item}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </Modal>
            <Info_product isModalVisible={choose} cancel={e => setchoose(e)} />
        </SafeAreaView>
    );
};




