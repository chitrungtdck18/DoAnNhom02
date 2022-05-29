
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Header from '../../Components/header_info';
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
import { getDatabase, ref, onValue } from "firebase/database"
export default function App(props) {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('InfoProduct')}>
                <View style={styles.viewitem}>
                    <View style={styles.viewimg}>
                        <Image source={{ uri: item.PhotoUrl1 }} style={styles.imglist}>
                        </Image>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const [data, setdata] = useState([])
    const _getData = () => {
        const Ref = ref(getDatabase(), 'products/');
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var item = childSnapshot.val();
                if (item.Type == props.route.params.name) {
                    returnArr.push(item);
                }
            });
            setdata(returnArr)
        });

    };
    useEffect(() => {
        _getData()
    }, [])
    return (
        <SafeAreaView style={styles.safeareaview}>
            <Header name={props.route.params.name} />
            <View style={{ flex: 1, marginVertical: 15 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};



