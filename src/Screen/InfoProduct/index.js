
import React, { useContext, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import Header from '../../Components/Header';
import Dot from '../../Icons/Dot'
import Undot from '../../Icons/Undot'
import TruckIcon from '../../Icons/TruckIcon'
import ShowIcon from '../../Icons/ShowmoreIcon'
import RulesIcon from '../../Icons/RulesIcon'
import ShieldIcon from '../../Icons/ShieldIcon'
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
import { AuthContext } from '../../Redux/AuthContext';
import { createCart } from '../../Model/ShoppingCart';
import { SliderBox } from "react-native-image-slider-box"

export default function App(props) {
    const { token } = useContext(AuthContext)
    const data = props.route.params.item;
    const images = [
        data.PhotoUrl1,
        data.PhotoUrl2,
        data.PhotoUrl3
    ];
    var _dot = [];
    const find = (u) => {
        for (let i = 0; i < DATA.length; i++) {
            var temp = (
                <View key={i}>
                    {DATA.indexOf(DATA[i]) === u ? <Dot style={styles.dot} /> : <Undot style={styles.dot} />}
                </View>
            )
            _dot[i] = temp
        }
    }
    const Item = ({ pic, position }) => (
        <ImageBackground source={{ uri: pic }} style={styles.ImageBackground}>
            <View style={styles.item}>
                <View style={styles.view_dot}>
                    {find(position)}
                    {_dot}
                </View>
                <GradientMask />
            </View>
        </ImageBackground>
    );
    const renderItem = ({ item }) => (
        <Item pic={item.value} position={DATA.indexOf(item)} />
    );
    const GradientMask = () => (
        <View style={StyleSheet.absoluteFillObject}>
            <Svg height="100%" width="100%">
                <Defs>
                    <LinearGradient id="grad" x1="100%" y1="0%" x2="100%" y2="100%">
                        <Stop offset="0%" stopColor="transparent" stopOpacity="0" />
                        <Stop offset="50%" stopColor="black" stopOpacity=".2" />
                    </LinearGradient>
                </Defs>

                <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
            </Svg>
        </View>)
    const handleraddtocart = () => {
        createCart(data, token.userid)
    }
    return (
        <ScrollView style={styles.safeareaview}>
            <Header name={"InfoProduct"} />
            {/* <View style={styles.viewimg}>
                <FlatList
                    numColumns={1}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.position}
                    horizontal={true}
                    scrollEnabled={true}
                    pagingEnabled
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View> */}

            <SliderBox
                style={styles.ImageBackground}
                images={images}
                sliderBoxHeight={400}
                dotColor="#2A2D3F"
                inactiveDotColor="#90A4AE"
                dotStyle={styles.dot}
                autoplay={true}
            />
            <View style={styles.viewText}>
                <Text style={styles.nameProduct}>{data.Name}</Text>
                <Text style={styles.priceProduct}>{data.Price}.000₫</Text>
            </View>
            <View style={styles.view_bottom}>
                <View style={styles.view_travel}>
                    <Text style={styles.travel}>Vận chuyển đến Việt Nam</Text>
                    <TouchableOpacity style={styles.view_item_travel}>
                        <TruckIcon />
                        <Text style={styles.text_deliver}>
                            Giao hàng miễn phí với mức giá cố định cho các
                            đơn hàng trên 499.000₫
                            Giao hàng dự kiến vào ngày
                            12/16/2022-14/06/2022
                        </Text>
                        <TouchableOpacity style={styles.ShowIcon}>
                            <ShowIcon size={15} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view_item_travel}>
                        <RulesIcon />
                        <Text style={styles.text_deliver}>
                           Quy tăc COD
                        </Text>
                        <TouchableOpacity style={styles.ShowIcon}>
                            <ShowIcon size={15} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view_item_travel}>
                        <ShieldIcon />
                        <Text style={styles.text_deliver}>
                          Chính sách hoàn trả
                        </Text>
                        <TouchableOpacity style={styles.ShowIcon}>
                            <ShowIcon size={15} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewDesc}>
                    <Text style={styles.Desc}>Description</Text>
                    <Text style={styles.DeContent}>{data.Desc}</Text>
                </View>
                <TouchableOpacity style={styles.payment} onPress={() => handleraddtocart()}>
                    <Text style={styles.textpayment}>Add to Cart</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};