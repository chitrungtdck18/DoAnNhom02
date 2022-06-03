import React, { useState, useContext, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import { styles } from './styles';
import Header from '../../Components/header_info';
import Remove from '../../Icons/RemoveIcon'
import { AuthContext } from '../../Redux/AuthContext';
import { Colors } from '../../Utils/Color';
import Notification from '../../Components/Notification';
import Payment from '../../Components/Payment';
import { getDatabase, ref, onValue } from "firebase/database"
import { addQuantity, removeCart, subQuantity } from '../../Model/ShoppingCart';
import { database } from '../../Utils/firebase-Config';
export default function App(props) {
    const { token } = useContext(AuthContext)
    const [data, setdata] = useState()
    const [totalMoney, settotalMoney] = useState(0);
    const [choose, setchoose] = useState(false)
    const [choose_Payment, setchoose_Payment] = useState(false)
    const [id, setid] = useState('')
    const remove = () => {
        removeCart(id, token.userid)
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.viewitem}>
                    <View style={styles.viewimg}>
                        <Image source={{ uri: item.PhotoUrl1 }} style={styles.imglist} />
                    </View>
                    <View style={styles.content_item}>
                        <TouchableOpacity style={styles.remove_icon}
                            onPress={() => setchoose(true) & setid(item.productID)}>
                            <Remove />
                        </TouchableOpacity>
                        <View style={styles.view_name}>
                            <Text style={styles.name}>{item.Name}</Text>

                        </View>
                        <View style={styles.view_add_remove}>
                            <Text style={styles.item_text}>{item.Price * item.Quantity}.000₫</Text>
                            <View style={styles.add_remove}>
                                <TouchableOpacity onPress={() => subQuantity(item, token.userid)}
                                    style={styles.view_plus}>
                                    <Text style={styles.plus_sub}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.view_quanty}>
                                    <Text style={styles.item_quantity}>{item.Quantity}</Text>
                                </View>
                                <TouchableOpacity onPress={() => addQuantity(item, token.userid)}
                                    style={styles.view_sub}>
                                    <Text style={styles.plus_sub}>+</Text>

                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const _getData = () => {
        const Ref = ref(database, 'shoppingCart/' + token.userid);
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setdata(returnArr)
            handltotal(returnArr)
        });

    };
    const handltotal = (data) => {
        var total = 0;
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                total += data[i].Price * data[i].Quantity;
            }
            settotalMoney(total);
        }
    }
    useEffect(() => {
        _getData()

    }, [])
    return (
        <SafeAreaView style={styles.safeareaview}>
            <Header name={"Shoping Cart"} />
            <View style={styles.list}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={styles.view_money}>
                <View style={styles.bottomCheckout}>
                    <Text>Total: </Text>
                    <Text>{totalMoney}.000₫ </Text>
                </View>

                <TouchableOpacity style={styles.payment} onPress={() => setchoose_Payment(true)}>
                    <Text style={styles.textpayment}>Payment</Text>
                </TouchableOpacity>
            </View>
            <Notification
                ModalVisible={choose}
                cancel={e => setchoose(e)}
                ok={() => remove()}
                name={"Remove item "}
                describe={"Are you sure to Remove the item!??"}
            />
            <Payment
                ModalVisible={choose_Payment}
                cancel={e => setchoose_Payment(e)}
                name={"Cart"}
                data={data}
            />
        </SafeAreaView>
    );
}