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
import { getDatabase, ref, onValue } from "firebase/database"
import { addQuantity, removeCart, subQuantity } from '../../Model/ShoppingCart';
export default function App(props) {
    const { token } = useContext(AuthContext)
    const [data, setdata] = useState()
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.viewitem}>
                    <View style={styles.viewimg}>
                        <Image source={{ uri: item.PhotoUrl1 }} style={styles.imglist}/>
                    </View>
                    <View style={styles.content_item}>
                        <View style={styles.view_name}>
                            <Text style={styles.name}>{item.Name}</Text>
                            <TouchableOpacity style={styles.remove_icon}
                                onPress={() => removeCart(item.productID, token.userid)}>
                                <Remove />
                            </TouchableOpacity>

                        </View>

                        <Text>price {item.Price}$</Text>
                        <View style={styles.view_add_remove}>
                            <View style={styles.add_remove}>
                                <TouchableOpacity onPress={() => addQuantity(item, token.userid)}>
                                    <Text style={styles.plus_sub}>+</Text>
                                </TouchableOpacity>
                                <Text style={styles.item_quantity}>{item.Quantity}</Text>
                                <TouchableOpacity onPress={() => subQuantity(item, token.userid)}>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <Text>{item.Price}$</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const _getData = () => {
        const Ref = ref(getDatabase(), 'shoppingCart/' + token.userid);
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setdata(returnArr)
        });

    };
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
                <View style={styles.ship}>
                    <Text>ship: </Text>
                    <Text>10$</Text>
                </View>
                <View style={styles.total}>
                    <Text>Total: </Text>
                    <Text>100$</Text>
                </View>

                <TouchableOpacity style={styles.payment}>
                    <Text style={styles.textpayment}>Payment</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}