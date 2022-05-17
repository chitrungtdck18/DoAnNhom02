
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground
} from 'react-native';

import MenuIcon from '../../Icons/MenuIcon'
import CartIcon from '../../Icons/CartIcon'
import SearchIcon from '../../Icons/SearchIcon'
import ShowIcon from '../../Icons/ShowmoreIcon'
import Header from '../../Components/Header';
import { styles } from './styles';

export default function Register(props) {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('InfoProduct')}>
                <View style={styles.viewitem}>
                    <View style={styles.viewimg}>
                        <Image source={require('../../Static/Images/logonew.png')} style={styles.imglist}>
                        </Image>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
        },
    ];
    return (
        <SafeAreaView style={styles.safeareaview}>
            <Header name={props.route.params.name} />
            <View style={{ flex: 1, marginVertical: 15 }}>
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
                        { title: '9. How to setting enviroment', price: '48$' },
                        { title: '10. How to setting enviroment', price: '90$' },

                    ]}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};



