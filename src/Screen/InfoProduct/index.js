
import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    ImageBackground,
    StyleSheet,
    ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import Header from '../../Components/Header';
import Dot from '../../Icons/Dot'
import Undot from '../../Icons/Undot'
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
export default function App(props) {
    const data = props.route.params.item;
    const DATA = [
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
        <Item pic={item} position={DATA.indexOf(item)} />
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
    return (
        <ScrollView style={styles.safeareaview}>
            <Header name={"InfoProduct"} />
            <View style={styles.viewimg}>
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
            </View>
            <View style={styles.viewText}>
                <Text style={styles.nameProduct}>{data.Name}</Text>
                <Text style={styles.priceProduct}>{data.Price} $</Text>
            </View>
            <View style={styles.viewDesc}>
                <Text style={styles.Desc}>
                    Description
                </Text>
                <Text style={styles.DeContent}>
                    {data.Desc}
                </Text>
            </View>
            <TouchableOpacity style={styles.payment}>
                <Text style={styles.textpayment}>Add to Cart</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};



