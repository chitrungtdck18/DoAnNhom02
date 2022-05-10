
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
import Header from '../../Components/Header';
import Remove from '../../Icons/RemoveIcon'
export default function Register(props) {
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
                    data={[
                        { title: '1. How to setting enviroment', price: '20$' },
                        { title: '2. How to setting enviroment', price: '10$' },
                        { title: '3. How to setting enviroment', price: '50$' },
                        { title: '4. How to setting enviroment', price: '40$' },
                        { title: '5. How to setting enviroment', price: '0$' },
                        { title: '6. How to setting enviroment', price: '4$' },
                        { title: '7. How to setting enviroment', price: '45$' },
                        { title: '8. How to setting enviroment', price: '0$' },

                    ]}
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



