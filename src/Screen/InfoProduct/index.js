
import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    ImageBackground,

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../../Components/Header';
import Dot from '../../Icons/Dot'
import Undot from '../../Icons/Undot'
import { styles } from './styles';

export default function Register(props) {
    const DATA = [
        require('../../Static/Images/pant.png'),
        require('../../Static/Images/shoes.png'),
        require('../../Static/Images/jacket.png')

    ];
    var _dot = [];

    const find = (u) => {
        for (let i = 0; i < DATA.length; i++) {
            var temp = (
                <View key={i}>
                    {DATA[i].position === u ? <Dot style={styles.dot} /> : <Undot style={styles.dot} />}
                </View>
            )
            _dot[i] = temp
        }
    }
    const Item = ({ pic, position }) => (
        <TouchableOpacity>
            <ImageBackground source={pic} style={styles.ImageBackground}>
                <View style={styles.item}>
                    <View style={styles.view_dot}>
                        {find(position)}
                        {_dot}
                    </View>

                </View>
            </ImageBackground>
            
        </TouchableOpacity>

    );
    const renderItem = ({ item }) => (
        <Item pic={item} position={DATA.indexOf(item)} />
    );
    return (
        <SafeAreaView style={styles.safeareaview}>
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
                <Text style={styles.nameProduct}>PKTT Nón Y Nguyên Bản 18- Ver2</Text>
                <Text style={styles.priceProduct}>35 $</Text>
            </View>
            <View style={styles.viewDesc}>
                <Text style={styles.Desc}>
                    Description
                </Text>
                <Text style={styles.DeContent}>
                    PKTT Nón Y Nguyên Bản 18- Ver2
                    Chất liệu: Simily
                    Thành phần: 100% Simily
                </Text>
            </View>
        </SafeAreaView>
    );
};



