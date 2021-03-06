import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ActivityIndicator
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
import UserIcon from '../../Icons/UserIcon'
import Modal from 'react-native-modal'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Info_product from '../../Components/Info_product'
import Items_Product from '../../Components/items_Product_horizontal'
import Items_Category from '../../Components/items_Category'

import { signOut, getAuth } from "firebase/auth";
import { styles } from './styles';
import { getlistCategory, arrayCategory } from '../../Model/Category';
import { AuthContext } from '../../Redux/AuthContext';
import { getDatabase, ref, onValue, query, orderByChild, limitToFirst, limitToLast, startAt } from "firebase/database"
import { Colors } from '../../Utils/Color';
import { Adminid, database } from '../../Utils/firebase-Config';
import { auth } from '../../Utils/firebase-Config';
import Ad_banner from '../../Components/Ad_banner';
import { SliderBox } from "react-native-image-slider-box"

export default function App(props) {
    { arrayCategory }
    const { token } = useContext(AuthContext)
    const [isModalVisible, setisModalVisible] = useState(false)
    const [User, setUser] = useState([])
    const [choose, setchoose] = useState(false)
    const { setToken } = useContext(AuthContext)
    const [data1, setdata1] = useState([])
    const [data2, setdata2] = useState([])
    const [loading, setloading] = useState(true)
    const [item, setitem] = useState()
    const [numbercart, setnumbercart] = useState(0)
    const dataitem = [...arrayCategory].filter((i) => i.id > -2);
    const [banner, setbanner] = useState([])
    const renderItem = ({ item, }) => (
        <Items_Product item={item} handlerLongClick={(e) => handlerLongClick(e)} />
    );
    const renderItem_Category = ({ item }) => (
        <Items_Category item={item} />
    );
    const handleLogout = async () => {
        signOut(auth)
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
    const _getUser = () => {
        const Ref = ref(database, 'user/' + token.userid);
        onValue(Ref, (snapshot) => {
            var item = snapshot.val();
            var returnArr = [];
            returnArr = item;
            setUser(returnArr)
        });

    };
    const _getData = () => {
        const Ref = ref(database, 'products/');
        onValue(query(Ref, orderByChild("Timestamp", "desc"), limitToLast(6)), (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setdata1(returnArr.reverse())
            setloading(false)
        });
        onValue(query(Ref, orderByChild("Price", "desc"), limitToFirst(6)), (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setdata2(returnArr)
            setloading(false)
        });
    };
    const _getCart = () => {
        const Ref = ref(database, 'shoppingCart/' + token.userid);
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setnumbercart(returnArr.length)
        });

    };
    const _getBanner = () => {
        const Ref = ref(database, 'Banner/');
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item.photo);
            });
            setbanner(returnArr)
        });

    };
    const handlerLongClick = (i) => {
        setitem(i)
        setchoose(!choose)
    }
    useEffect(() => {
        getlistCategory()
        _getUser()
        _getData()
        _getCart()
        _getBanner()
        console.log(dataitem)
        const unsubscribe = props.navigation.addListener('focus', () => {
            setisModalVisible(false)
        });
        return unsubscribe;
    }, [])
    return (
        <>
            {loading ?
                <View style={styles.loading}>
                    <ActivityIndicator size="large" />
                </View>
                : <ScrollView syle={styles.safeareaview}>

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
                                {numbercart > 0 ? <View style={styles.numberCart}>
                                    <Text style={styles.textnumberCart}>{numbercart}</Text>
                                </View> : null}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.viewSearch} onPress={() => props.navigation.navigate('SearchProduct')}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search..."
                            placeholderTextColor={Colors.primary}
                            onFocus={() => props.navigation.navigate('SearchProduct')}
                        />
                        <TouchableOpacity onPress={() => props.navigation.navigate('SearchProduct')}>
                            <SearchIcon />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <View style={styles.component}>
                        <SliderBox
                            style={styles.ImageBackground}
                            images={banner}
                            sliderBoxHeight={500}
                            dotColor="#2A2D3F"
                            inactiveDotColor="#90A4AE"
                            dotStyle={styles.dot}
                            autoplay={true}
                        />
                    </View>
                    {/* <View style={styles.viewType}>
                        <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Balo" })}>
                            <Image style={styles.Image} source={require('../../Static/Images/bp.png')}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Cap" })}>
                            <Image style={styles.Image} source={require('../../Static/Images/cap.png')}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Jackets" })}>
                            <Image style={styles.Image} source={require('../../Static/Images/jacket.png')}></Image>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewType}>
                        <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Pants" })}>
                            <Image style={styles.Image} source={require('../../Static/Images/pant.png')}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Shoe" })}>
                            <Image style={styles.Image} source={require('../../Static/Images/shoes.png')}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchImage} onPress={() => props.navigation.navigate('List_ItemByCategory', { name: "Tshirt" })}>
                            <Image style={styles.Image} source={require('../../Static/Images/tshirt.png')}></Image>

                        </TouchableOpacity>
                    </View> */}
                    <View style={{ paddingBottom: 5 }}>
                        <FlatList
                            data={dataitem}
                            renderItem={renderItem_Category}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{ marginTop: 15, borderTopLeftRadius: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title}>New Product</Text>
                            <TouchableOpacity style={styles.touchIconShow}
                                onPress={() => props.navigation.navigate('List_ItemBy', { name: "New Product", method: "Timestamp" })}>
                                <ShowIcon />
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingBottom: 5 }}>
                            <FlatList
                                data={data1}
                                renderItem={renderItem}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15, borderTopLeftRadius: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title}>low price</Text>
                            <TouchableOpacity style={styles.touchIconShow}
                                onPress={() => props.navigation.navigate('List_ItemBy', { name: "low price", method: "Price" })}>
                                <ShowIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_list}>
                            <FlatList
                                data={data2}
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
                                    <Text style={styles.text_item}>Change Password</Text>
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
                    <Info_product isModalVisible={choose} cancel={e => setchoose(e)} item={item} />
                    <Ad_banner />
                </ScrollView>}

        </>
    );
}