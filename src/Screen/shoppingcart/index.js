
import React, { useState, useContext } from 'react';
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
export default function App(props) {
    const { token } = useContext(AuthContext)
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('InfoProduct')}>
                <View style={styles.viewitem}>
                    <View style={styles.viewimg}>
                        <Image source={require('../../Static/Images/logonew.png')} style={styles.imglist}>
                        </Image>
                    </View>
                    <View style={styles.content_item}>
                        <View style={styles.view_name}>
                            <Text style={styles.name}>name product</Text>
                            <TouchableOpacity style={styles.remove_icon}>
                                <Remove />
                            </TouchableOpacity>

                        </View>

                        <Text>price 25$</Text>
                        <View style={styles.view_add_remove}>
                            <View style={styles.add_remove}>
                                <Text >+</Text>
                                <Text style={styles.item_quantity}>0</Text>
                                <Text>-</Text>
                            </View>
                            <Text>25$</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.safeareaview}>
            <Header name={"Shooping Cart"} />
            <View style={styles.list}>
                <FlatList
                    data={token.usercard}
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
};



